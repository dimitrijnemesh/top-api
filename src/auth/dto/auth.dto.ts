import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';
import { IsPasswordValid } from './password.validator';

export class AuthDto {
	@IsEmail()
	@IsString()
	@IsNotEmpty()
	login: string;

	@IsPasswordValid()
	@IsString()
	@IsNotEmpty()
	password: string;
}
