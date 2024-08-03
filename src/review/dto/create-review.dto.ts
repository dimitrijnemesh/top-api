import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
	@IsString()
	name: string;

	@IsString()
	title: string;

	@IsString()
	description: string;

	@Max(5, { message: 'Rating cannot be lower than 1' })
	@Min(1, { message: 'Rating cannot be higher than 1' })
	@IsNumber()
	rating: number;

	@IsString()
	productId: string;
}
