/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-11 16:18:23
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 10:59:19
 */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(
    private readonly tagService: TagService
  ) { }

  // 创建文章分类
  @Post('create')
  create(@Body() param){
      return this.tagService.createTag(param)
  }

  //  查询全部分类
  @Get('findAll')
  findAll(){
    return this.tagService.findAll()
  }
}
