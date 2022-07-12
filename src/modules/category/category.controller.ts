/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-11 16:18:23
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 10:00:16
 */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService
  ) { }

  // 创建文章分类
  @Post('create')
  create(@Body() param){
      return this.categoryService.createCategory(param)
  }

  //  查询全部分类
  @Get('findAll')
  findAll(){
    return this.categoryService.findAll()
  }
}
