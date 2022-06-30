/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:56:44
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-17 15:30:56
 */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { UsersEntity } from './user.entity';
import { HashPasswordMiddleware } from 'src/middlewares/hash-password.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(HashPasswordMiddleware)
        .forRoutes('users/regist')
  }
}
