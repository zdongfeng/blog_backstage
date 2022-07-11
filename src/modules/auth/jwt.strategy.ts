/*
 * @Descripttion: jwt策略
 * @Author: zhaodongfeng
 * @Date: 2022-06-17 17:01:33
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-07 16:57:28
 */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport'; 
import { Injectable } from '@nestjs/common';
import { JWT_CONSTANT } from './jwt.constant';
import { UsersEntity } from '../../model/user.entity';  

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_CONSTANT.secret,
    });
  }

  async validate(payload: UsersEntity) {
    return { userId: payload.id };
  }
}
