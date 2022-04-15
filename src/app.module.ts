/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 10:02:26
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-04-15 14:16:01
 */
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleWare } from './modules/common/middleware/logger.middleware';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [HelloModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 为hello路由添加中间间
    consumer
      .apply(LoggerMiddleWare)
      .exclude({ path: 'hello', method: RequestMethod.POST })
      .forRoutes('');
  }
}
