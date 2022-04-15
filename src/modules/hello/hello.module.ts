/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 17:29:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-04-15 10:43:37
 */
import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
