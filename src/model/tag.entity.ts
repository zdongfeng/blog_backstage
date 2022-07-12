/*
 * @Descripttion: 文章标签
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:26:38
 */
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArticleEntity } from './article.entity';
/**
 * @descripttion:
 * @author: zhaodongfeng
 * @Date: 2022-06-02 17:36:25
 * @@param: {}
 */
@Entity({ name: 'tag' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 名称
  @Column('varchar')
  tag_name: string;

  // 描述
  @Column('varchar')
  tag_description: string;

  // 创建时间
  @Column('varchar')
  createTime: string;

  // 对应文章表
  @ManyToMany(() => ArticleEntity, (article) => article.tag)
  article: ArticleEntity[];
}
