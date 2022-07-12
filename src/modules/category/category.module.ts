/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-07-11 16:17:48
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:27:16
 */
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/model/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
