import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
	@Get(':id')
	async get(@Param('id') id: string) {}

	@Post('create')
	async create(@Body() dto: Omit<ProductModel, '_id'>) {}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModel) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}
}
