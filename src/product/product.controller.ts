import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './dto/find-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
	@Get(':id')
	async get(@Param('id') id: string) {}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateProductDto) {}

	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	@Post()
	async find(@Body() dto: FindProductDto) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModel) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}
}
