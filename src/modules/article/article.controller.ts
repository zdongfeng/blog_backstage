/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-04 16:05:11
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-11 16:34:50
 */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
    constructor(
        private readonly articleService: ArticleService 
    ){}
    @Get('list')
    getArticleList(){
        return this.articleService.findAll()
    }

    @Post('create')
    create(@Body() param){
        return this.articleService.createActicle(param)
    }
}
