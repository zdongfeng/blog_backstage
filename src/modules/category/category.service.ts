/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-11 16:18:09
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 10:04:45
 */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntity } from 'src/model/category.entity';
import to from 'src/utils/await-to-js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly cateGoryRepository: Repository<CategoryEntity>
  ){}

  public async createCategory(info) {
    const [err, res] = await to(this.cateGoryRepository.save(info))
    if (err) {
      return {
        code: 100,
        msg: '分类创建失败，请联系相关负责人。错误详情： ' + err
      }
    } else {
      return {
        code: 0,
        data: '创建成功'
      }
    }
  }

  public async findAll(){
    return await this.cateGoryRepository.find({relations: ['article']})
  }
}
