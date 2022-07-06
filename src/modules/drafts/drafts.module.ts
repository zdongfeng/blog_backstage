/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-06 15:41:10
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-06 15:45:46
 */
import { Module } from '@nestjs/common';
import { DraftsService } from './drafts.service';
import { DraftsController } from './drafts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DraftsEntity } from './drafts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DraftsEntity])],
  providers: [DraftsService],
  controllers: [DraftsController]
})
export class DraftsModule {}
