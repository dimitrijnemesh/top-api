import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<ReviewModel>;

@Schema({ timestamps: true })
export class ReviewModel {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	descriptoin: string;

	@Prop({ required: true })
	rating: number;

	@Prop({ required: true })
	createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
