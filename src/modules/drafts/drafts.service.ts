/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-06 15:41:35
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-06 15:50:59
 */
import { Injectable } from '@nestjs/common';
import to from 'src/utils/await-to-js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DraftsEntity } from './drafts.entity';


@Injectable()
export class DraftsService {
  constructor(
    @InjectRepository(DraftsEntity)
    private readonly draftsRepository: Repository<DraftsEntity>
  ) { }

  public async createActicle(info) {
    const [err, res] = await to(this.draftsRepository.save(info))
    if (err) {
      return {
        code: 100,
        msg: '存入草稿箱异常，请联系相关负责人。错误详情： ' + err
      }
    } else {
      return {
        code: 0,
        data: '创建成功'
      }
    }
  }

  public async findAll() {
    return {
      data: await this.draftsRepository.find(),
      code: 0
    }
  }
}
