/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 10:02:26
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-02 09:46:48
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Log4jsLogger } from '@nestx-log4js/core';
import { AppModule } from './app.module';

const listenPort = 4321
const logger = new Logger('main.ts')

async function bootstrap() {
  // 使用 Nest 的工厂函数创建AppModule
  /**
   * NestFactory,create
   * 三个参数
   * 第一个： 传入的moudle对象
   * 第二个:
   */
  const app = await NestFactory.create(AppModule);

  /**
   * 使用log4js  日志框架
   */
  app.useLogger(app.get(Log4jsLogger));
  // 设置全局路由前缀
  // app.setGlobalPrefix();
  // 监听端口
  await app.listen(listenPort);
}
bootstrap().then(() => {
  logger.log(`服务启动 -> htttp://localhost:${listenPort}`)
});
