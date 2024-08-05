import {
	registerDecorator,
	ValidationArguments,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsPasswordValidConstraint implements ValidatorConstraintInterface {
	validate(password: string, args: ValidationArguments) {
		if (password.length < 8) {
			return false;
		}

		const hasUpperCase = /[A-Z]/.test(password);
		const hasNumber = /[0-9]/.test(password);

		return hasUpperCase && hasNumber;
	}

	defaultMessage(args: ValidationArguments) {
		return 'Password must be at least 8 characters long and contain at least one number and one uppercase letter';
	}
}

export function IsPasswordValid(validationOptions?: ValidationOptions) {
	return function (object: Object, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			constraints: [],
			validator: IsPasswordValidConstraint,
		});
	};
}
