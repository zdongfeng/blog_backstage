/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-04 16:05:01
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 15:52:04
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import to from 'src/utils/await-to-js';
import { In, Repository } from 'typeorm';
import { TagEntity } from 'src/model/tag.entity';
import { ArticleEntity } from 'src/model/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>
  ) { }

  public async createActicle(info) {
    info.tag = await this.tagRepository.findBy({id: In(info.tag)})
    const [err, res] = await to(this.articleRepository.save(info))
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
      data: await this.articleRepository.find({relations: ['tag']}),
      code: 0
    }
  }
}
