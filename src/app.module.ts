/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 10:02:26
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-04-15 10:44:48
 */
import { Module } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [HelloModule],
})
export class AppModule {}
