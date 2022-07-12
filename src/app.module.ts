/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 10:02:26
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 11:02:32
 */
import { join, resolve } from 'path';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleWare } from './modules/common/middleware/logger.middleware';
import { HelloModule } from './modules/hello/hello.module';
import { UsersModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ConfigModule, ConfigService } from 'nestjs-config';
// env文件
import envConfig from '../config/env';
// 数据库
import { TypeOrmModule } from '@nestjs/typeorm';

// log4 日志模块
import { Log4jsModule } from '@nestx-log4js/core';
import { PictureModule } from './modules/picture/picture.module';
import { ArticleModule } from './modules/article/article.module';
import { DraftsModule } from './modules/drafts/drafts.module';
import { CategoryModule } from './modules/category/category.module';
import { TagModule } from './modules/tag/tag.module';

@Module({
  imports: [
    // // 将env文件注册
    ConfigModule.forRoot({
      isGlobal: true, //设为全局
      envFilePath: [
        envConfig.path,
      ],
    }),
    // 配置数据库连接
    TypeOrmModule.forRootAsync({
      // 引入
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql', // 数据库类型
        host: configService.get('DB_HOST', 'localhost'), // 主机，默认为localhost
        port: configService.get<number>('DB_PORT', 3306), // 端口号
        username: configService.get('DB_USER', 'root'), // 用户名
        password: configService.get('DB_PASSWORD', 'Zhaodongfang123...'), // 密码
        database: configService.get('DB_DATABASE', 'blog'), //数据库名
        timezone: '+08:00', //服务器上配置的时区
        synchronize: true, //根据实体自动创建数据库表， 生产环境建议关闭
        entities: ['dist/**/*.entity{ .ts,.js}'], // 数据表实体
      }),
    }),
    // 日志模块
    Log4jsModule.forRoot(),
    // 模块
    HelloModule,
    UsersModule,
    AuthModule,
    PictureModule,
    ArticleModule,
    DraftsModule,
    CategoryModule,
    TagModule
  ],
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
