import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewModel, ReviewSchema } from './review.model/review.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [MongooseModule.forFeature([{ name: ReviewModel.name, schema: ReviewSchema }])],
	controllers: [ReviewController],
})
export class ReviewModule {}
