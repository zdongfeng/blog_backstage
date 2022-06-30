/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 17:28:59
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-28 14:01:11
 */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import to from 'src/utils/await-to-js';
import { encript } from 'src/utils/enciptions';
import { UsersEntity } from '../user/user.entity';
import { UsersService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  private async validateUser(user) {
    const { username, password } = user
    const [err, data] = await to(this.userService.findOneByName(username))
    if (err) {
      return {
        code: 100,
        msg: '用户登录失败，请联系相关负责人。错误详情： ' + err
      }
    } else {
      if (data !== null && data) {
        const pass = encript(password, data.salt)
        if (pass === data.password) {
          return {
            code: 0,
            msg: '登录成功',
            data: {
              userId: data.id,
              username: data.username
            }
          }
        } else {
          return {
            code: 100,
            msg: '用户名密码错误'
          }
        }
      } else {
        return {
          code: 100,
          msg: '用户尚未注册'
        }
      }
    }
  }

  /**
   * @desc: 创建token
   * @params {User} user
   */
  private async createToken(user: UsersEntity) {
    return await this.jwtService.sign(user)
  }

  /**
 * @desc: 用户登录方法
 * @param {*} user
 */
  async login(user) {
    const [err, data] = await to(this.validateUser(user))
    if (err) {
      return {
        code: 100,
        msg: '用户登录失败，请联系相关负责人。错误详情： ' + err
      }
    } else {
      if (data.code !== 0) {
        return data
      }
      const userId = data.data.userId
      const username = data.data.username
      const token = await this.createToken(user)
      return {
        code: 0,
        data: {
          token: 'Bearer ' + token ,
          userId,
          username
        }
      }
    }
  }
}
