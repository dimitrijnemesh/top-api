import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<ProductModel>;

@Schema()
class ProductCharacteristics {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	value: string;
}

@Schema({ timestamps: true })
export class ProductModel {
	@Prop({ required: true })
	image: string;

	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	price: number;

	@Prop({ required: true })
	oldPrice: number;

	@Prop({ required: true })
	credit: number;

	@Prop({ required: true })
	calculatedRating: number;

	@Prop({ required: true })
	description: string;

	@Prop({ required: true })
	advantages: string;

	@Prop({ required: true })
	disAdvantages: string;

	@Prop({ required: true, type: [String] })
	categories: string[];

	@Prop({ required: true, type: [String] })
	tags: string[];

	@Prop({ required: true, type: [ProductCharacteristics], _id: false })
	characteristics: ProductCharacteristics[];
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
