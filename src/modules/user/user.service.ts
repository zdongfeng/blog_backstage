/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:56:55
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-01 20:59:55
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async findAll(): Promise<UsersEntity[]> {
    return await this.usersRepository.find();
  }

  async create(user): Promise<UsersEntity[]> {
    const {username} = user
    const u = await this.usersRepository.findOne({ where: {username}})
    if(u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: '姓名不允许重复'
        },
        HttpStatus.BAD_REQUEST
      )
    }
    return await this.usersRepository.save(user)
  }
}
