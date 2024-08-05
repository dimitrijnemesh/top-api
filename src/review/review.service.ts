import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ReviewDocument, ReviewModel } from './review.model/review.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND, WRONG_ID } from './review.constants';

@Injectable()
export class ReviewService {
	constructor(@InjectModel(ReviewModel.name) private readonly reviewModel: Model<ReviewDocument>) {}

	async create(dto: CreateReviewDto): Promise<ReviewDocument> {
		return this.reviewModel.create(dto);
	}

	async findByProductId(productId: string): Promise<ReviewDocument[]> {
		if (productId.length !== 24) {
			throw new BadRequestException(WRONG_ID);
		}
		const review = await this.reviewModel.find({ productId: new Types.ObjectId(productId) }).exec();
		if (review.length === 0) {
			throw new NotFoundException(REVIEW_NOT_FOUND);
		}
		return review;
	}

	async delete(id: string): Promise<ReviewDocument | null> {
		if (id.length !== 24) {
			throw new BadRequestException(WRONG_ID);
		}

		const deletedReview = await this.reviewModel.findByIdAndDelete(id).exec();
		if (!deletedReview) {
			throw new NotFoundException(REVIEW_NOT_FOUND);
		}
		return deletedReview;
	}

	async deleteByProductId(productId: string) {
		return this.reviewModel.deleteMany({ productId: new Types.ObjectId(productId) }).exec();
	}
}
