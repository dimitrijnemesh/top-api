import { IsNotEmpty, IsString } from 'class-validator';

export class FindProductDto {
	@IsString()
	@IsNotEmpty()
	category: string;

	@IsString()
	@IsNotEmpty()
	limit: number;
}
