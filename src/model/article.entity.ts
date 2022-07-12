/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:26:25
 */
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { TagEntity } from './tag.entity';
import { UsersEntity } from './user.entity';
/**
 * @descripttion:
 * @author: zhaodongfeng
 * @Date: 2022-06-02 17:36:25
 * @@param: {}
 */
@Entity({ name: 'article' })
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 标题
  @Column('varchar')
  title: string;

  // 描述
  @Column('varchar')
  description: string;

  // 内容
  @Column('text')
  content: string;

  // 创建时间
  @Column('varchar')
  createTime: string;

  // 更新时间
  @Column('varchar', {
    default: () => 0,
  })
  updateTime?: string;

  // 浏览量
  @Column('double', {
    default: () => 0,
  })
  read_count: number;

  // 点赞量
  @Column('double', {
    default: () => 0,
  })
  like_count: number;

  // 评论量
  @Column('double', {
    default: () => 0,
  })
  comment_count: number;

  //  对应用户id
  @ManyToOne(() => UsersEntity, (user) => user.article)
  user: UsersEntity;

  //  对应分类id
  @ManyToOne(() => CategoryEntity, (category) => category.article)
  category: CategoryEntity;

  // 对应标签
  @ManyToMany(() => TagEntity, (tag) => tag.article, {
    cascade: true,
  })
  @JoinTable()
  tag: TagEntity[];
}
