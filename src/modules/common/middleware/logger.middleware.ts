/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-15 13:49:44
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-04-19 11:36:59
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    const { method, path } = req;
    console.log(`${method} ${path}`);
    next();
  }
}

// implements 实现
