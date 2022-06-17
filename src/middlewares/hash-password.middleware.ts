/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-02 09:48:12
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-09 10:44:32
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { addSalt, encript } from 'src/utils/enciptions';

@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let userPassword = req.body['password']
    if (userPassword) {
      const salt = addSalt()
      userPassword = encript(userPassword, salt)
      req.body['password'] = userPassword
      req.body['salt'] = salt
    }
    next();
  }
}
