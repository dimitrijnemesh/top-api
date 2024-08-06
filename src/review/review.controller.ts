import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { JWTAuthGuard } from 'src/auth/quards/jwt.guard';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {
		return this.reviewService.findByProductId(productId);
	}

	@UsePipes(new ValidationPipe())
	@UseGuards(JWTAuthGuard)
	@Post('createReview')
	async createReview(@Body() dto: CreateReviewDto) {
		return this.reviewService.create(dto);
	}

	@UseGuards(JWTAuthGuard)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.reviewService.delete(id);
	}
}
