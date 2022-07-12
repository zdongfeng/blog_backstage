/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-11 15:21:19
 */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from './article.entity';
/**
 * @descripttion: 文章分类
 * @author: zhaodongfeng
 * @Date: 2022-06-02 17:36:25
 * @@param: {}
 */
@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 名称
  @Column('varchar')
  category_name: string;

  // 描述
  @Column('varchar')
  category_description: string;

  // 创建时间
  @Column("varchar")
  createTime: string;

  @OneToMany(() => ArticleEntity, (article) => article.category)
  article: ArticleEntity[]
}
