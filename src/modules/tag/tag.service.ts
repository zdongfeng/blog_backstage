/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-07-11 16:18:09
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:27:53
 */
import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { TagEntity } from 'src/model/tag.entity';
import to from 'src/utils/await-to-js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  public async createTag(info) {
    const [err, res] = await to(this.tagRepository.save(info));
    if (err) {
      return {
        code: 100,
        msg: '标签创建失败，请联系相关负责人。错误详情： ' + err,
      };
    } else {
      return {
        code: 0,
        data: '创建成功',
      };
    }
  }

  public async findAll() {
    return await this.tagRepository.find({ relations: ['article'] });
  }

  public async findIds(ids) {
    return await this.tagRepository.findBy({ id: In(ids) });
  }
}
