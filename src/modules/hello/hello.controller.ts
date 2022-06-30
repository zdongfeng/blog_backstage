/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 17:29:46
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-26 20:01:30
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
  Controller,
  Get,
  Post,
  Patch,
  Query,
  Delete,
  Body,
  Param,
  Headers,
  HttpCode,
  Redirect,
} from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 查询
  @Get()
  // @Redirect('https://docs.nestjs.com', 302)
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.helloService.fetch(id);
  }

    // 查询
    @Get('getGoods')
    // @Redirect('https://docs.nestjs.com', 302)
    getGoods(@Query() {id} ): object{
      return this.helloService.getGoods(id);
    }

  // 创建
  @Post()
  @HttpCode(204)
  save(@Body() { message }): string {
    return this.helloService.save(message);
  }

  // 更新
  @Patch(':id')
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  // 删除
  @Delete()
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
