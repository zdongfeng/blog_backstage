/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-06 15:41:43
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-11 17:22:01
 */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { DraftsService } from './drafts.service';

@Controller('drafts')
export class DraftsController {
  constructor(
    private readonly draftsService: DraftsService
  ) { }
  @Get('list')
  getArticleList() {
    return this.draftsService.findAll()
  }

  @Post('create')
  create(@Body() param) {
    return this.draftsService.createActicle(param)
  }
}
