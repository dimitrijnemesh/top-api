import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ProductModel } from 'src/product/product.model/product.model';

export type ReviewDocument = HydratedDocument<ReviewModel>;

@Schema({ timestamps: true })
export class ReviewModel {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	description: string;

	@Prop({ required: true })
	rating: number;

	@Prop({ required: true, type: Types.ObjectId, ref: ProductModel.name })
	productId: ProductModel;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
