import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

export class ProductCharacteristicsDto {
	@IsString()
	name: string;

	@IsString()
	value: string;
}

export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	image: string;

	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	price: number;

	@IsString()
	@IsOptional()
	oldPrice: number;

	@IsString()
	@IsNotEmpty()
	credit: number;

	@IsString()
	@IsNotEmpty()
	description: string;

	@IsString()
	@IsNotEmpty()
	advantages: string;

	@IsString()
	@IsNotEmpty()
	disAdvantages: string;

	@IsArray()
	@IsString({ each: true })
	@IsNotEmpty()
	categories: string[];

	@IsArray()
	@IsString({ each: true })
	@IsNotEmpty()
	tags: string[];

	@IsArray()
	@ValidateNested()
	@Type(() => ProductCharacteristicsDto)
	@IsNotEmpty()
	characteristics: ProductCharacteristicsDto[];
}
