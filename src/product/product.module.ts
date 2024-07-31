import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel, ProductSchema } from './product.model/product.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: ProductModel.name, schema: ProductSchema }])],
	controllers: [ProductController],
})
export class ProductModule {}
