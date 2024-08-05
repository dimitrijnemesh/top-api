import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateReviewDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	description: string;

	@Max(5, { message: 'Rating cannot be lower than 1' })
	@Min(1, { message: 'Rating cannot be higher than 1' })
	@IsNumber()
	@IsNotEmpty()
	rating: number;

	@MaxLength(24)
	@MinLength(24)
	@IsString()
	@IsNotEmpty()
	productId: string;
}
