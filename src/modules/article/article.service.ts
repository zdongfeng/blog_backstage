/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-04 16:05:01
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-06 15:49:06
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import to from 'src/utils/await-to-js';
import { Repository } from 'typeorm';
import { ActicleEntity } from './article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ActicleEntity)
    private readonly acticleRepository: Repository<ActicleEntity>
  ) { }

  public async createActicle(info) {
    const [err, res] = await to(this.acticleRepository.save(info))
    if (err) {
      return {
        code: 100,
        msg: '文章创建失败，请联系相关负责人。错误详情： ' + err
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
      data: await this.acticleRepository.find(),
      code: 0
    }
  }
}
