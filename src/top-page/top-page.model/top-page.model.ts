import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TopPageDocument = HydratedDocument<TopPageModel>;

export enum TopLevelCategory {
	Cources,
	Services,
	Books,
	Products,
}

@Schema()
export class HhData {
	@Prop({ required: true })
	count: number;

	@Prop({ required: true })
	juniorSalary: number;

	@Prop({ required: true })
	middleSalary: number;

	@Prop({ required: true })
	seniorSalary: number;
}

@Schema()
export class TopPageAdvantages {
	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	description: string;
}

@Schema({ timestamps: true })
export class TopPageModel {
	@Prop({ required: true, enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@Prop({ required: true })
	secondCategory: string;

	@Prop({ required: true, unique: true })
	alias: string;

	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	category: string;

	@Prop({ required: false })
	hh?: HhData;

	@Prop({ required: true, type: [TopPageAdvantages] })
	advantages: TopPageAdvantages[];

	@Prop({ required: true })
	seoText: string;

	@Prop({ required: true })
	tagsTitle: string;

	@Prop({ required: true, type: [String] })
	tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPageModel);
