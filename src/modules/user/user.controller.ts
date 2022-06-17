/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:57:07
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-17 09:46:49
 */
import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('findAll')
  findAll() {
    return this.usersService.findAll();
  }

  @HttpCode(200)
  @Post('login')
  login(@Body() param) {
    return this.usersService.login(param)
  }

  @Post('regist')
  registUser(@Body() param) {
    return this.usersService.registUser(param);
  }

}
