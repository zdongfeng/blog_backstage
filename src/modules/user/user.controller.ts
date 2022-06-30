/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:57:07
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-28 11:32:39
 */
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '../role/role.decorator';
import { UsersService } from './user.service';

@Controller('users')

// 使用方式1： 整个controllers使用此守卫
// @UseGuards(AuthGuard('jwt'))

export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('findAll')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.usersService.findAll();
  }

  @Post('regist')
  registUser(@Body() param) {
    return this.usersService.registUser(param);
  }

  @Get('role')
  @Role('admin')
  getRole(){
    return 'get Roles'
  }
}
