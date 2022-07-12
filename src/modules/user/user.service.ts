/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:56:55
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:27:59
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../model/user.entity';
import { to } from '../../utils/await-to-js';

interface loginConfig {
  username: string;
  password: string;
}
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  public async findOneByName(username: string) {
    return await this.usersRepository.findOne({ where: { username } });
  }

  async login(user: loginConfig) {
    return await this.usersRepository.findOne({
      where: { username: user.username },
    });
  }

  async findAll(): Promise<UsersEntity[]> {
    return await this.usersRepository.find({ relations: ['article'] });
  }

  async registUser(user) {
    const { username } = user;
    const u = await this.findOneByName(username);
    if (u) {
      throw new HttpException(
        {
          message: '姓名不允许重复',
          error: '姓名不允许重复',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const [err, res] = await to(this.usersRepository.save(user));
    if (err) {
      return {
        code: 100,
        msg: '用户注册失败，请联系相关负责人。错误详情： ' + err,
      };
    } else {
      return {
        code: 0,
        data: '注册成功',
      };
    }
  }
}
