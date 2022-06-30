/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 17:29:46
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-17 16:46:36
 */

/**
 * @Controller : 控制器
 * @Get : 请求方式
 * @Post : 请求方式
 * @Patch : 请求方式
 * @Delete : 请求方式
 * @Query : 获取请求query参数
 * @Body : 获取请求body参数
 * @Param : 获取请求params参数
 * @Headers : 获取请求q携带header值
 */
import {
  Body,
  Controller, Post
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(@Body() params){
    return this.authService.login(params)
  }
}
