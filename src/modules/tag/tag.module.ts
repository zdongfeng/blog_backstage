/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-11 16:17:48
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 10:59:21
 */
import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from 'src/model/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  providers: [TagService],
  controllers: [TagController]
})
export class TagModule {}
