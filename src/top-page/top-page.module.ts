import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TopPageModel, TopPageSchema } from './top-page.model/top-page.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [MongooseModule.forFeature([{ name: TopPageModel.name, schema: TopPageSchema }])],
	controllers: [TopPageController],
})
export class TopPageModule {}
