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
import { ProductService } from './product.service';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}
	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.productService.findById(id);
	}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateProductDto) {
		return this.productService.create(dto);
	}

	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	@Post('find')
	async find(@Body() dto: FindProductDto) {
		return this.productService.findWithReview(dto);
	}

	@Patch(':id')
	async patch(@Param('id', IdValidationPipe) id: string, @Body() dto: ProductModel) {
		return this.productService.updateById(id, dto);
	}

	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		return this.productService.deleteById(id);
	}
}
