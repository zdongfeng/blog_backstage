/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:57:07
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-01 17:53:25
 */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('findAll')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('createUser')
  create (@Body() param) {
    console.log(param)
    return this.usersService.create(param);
  }
}
