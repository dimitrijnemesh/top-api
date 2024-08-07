import { Type } from 'class-transformer';
import {
	IsArray,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	ValidateNested,
} from 'class-validator';

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

	@IsNumber()
	@IsNotEmpty()
	price: number;

	@IsNumber()
	@IsOptional()
	oldPrice: number;

	@IsNumber()
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
