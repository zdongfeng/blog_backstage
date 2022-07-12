/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-04 16:04:55
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 15:49:18
 */
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ArticleEntity } from '../../model/article.entity';
import { TagEntity } from 'src/model/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, TagEntity])],
  providers: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule { }
