import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDocument, ProductModel } from './product.model/product.model';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { PRODUCT_NOT_FOUND_ERROR } from './product.constants';
import { FindProductDto } from './dto/find-product.dto';
import { ReviewModel } from 'src/review/review.model/review.model';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(ProductModel.name) private readonly productModel: Model<ProductDocument>,
	) {}

	async create(dto: CreateProductDto): Promise<ProductModel> {
		return this.productModel.create(dto);
	}

	async findById(id: string): Promise<ProductModel | null> {
		const product = await this.productModel.findById(id).exec();
		if (!product) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
		return product;
	}

	async deleteById(id: string): Promise<ProductModel | null> {
		const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();
		if (!deletedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
		return deletedProduct;
	}

	async updateById(id: string, dto: CreateProductDto): Promise<ProductModel | null> {
		const updatedProduct = await this.productModel.findByIdAndUpdate(id, dto, { new: true });
		if (!updatedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
		return updatedProduct;
	}

	async findWithReview(dto: FindProductDto) {
		const product = (await this.productModel
			.aggregate([
				{
					$match: {
						categories: dto.category,
					},
				},
				{
					$sort: {
						_id: 1,
					},
				},
				{
					$limit: dto.limit,
				},
				{
					$lookup: {
						from: 'Review',
						localField: '_id',
						foreignField: 'productId',
						as: 'review',
					},
				},
				{
					$addFields: {
						reviewCount: { $size: '$review' },
						reviewAvg: { $avg: '$review.rating' },
					},
				},
			])
			.exec()) as (ProductModel & {
			review: ReviewModel[];
			reviewCount: number;
			reviewAvg: number;
		})[];
		return product;
	}
}
