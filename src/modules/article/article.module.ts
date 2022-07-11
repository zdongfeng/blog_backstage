/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-04 16:04:55
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-07 16:57:04
 */
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ActicleEntity } from '../../model/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ActicleEntity])],
  providers: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule {}
