/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-11 15:21:25
 */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';
// import { TagEntity } from './tag.entity ';
import { UsersEntity } from './user.entity';
/**
 * @descripttion: 
 * @author: zhaodongfeng
 * @Date: 2022-06-02 17:36:25
 * @@param: {}
 */
@Entity({ name: 'article' })
export class ActicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 标题
  @Column('varchar')
  article_title: string;

  // 描述
  @Column('varchar')
  article_description: string;

  // 内容
  @Column('text')
  article_content: string;

  // 创建时间
  @Column("varchar")
  createTime: string;

  // 更新时间
  @Column('varchar', {
    default: () => 0
  })
  updateTime?: string;

  // 浏览量
  @Column('double')
  read_count: number;

  // 点赞量
  @Column('double')
  like_count: number;

  // 评论量
  @Column('double')
  comment_count: number

  //  对应用户id
  @ManyToOne(() => UsersEntity, (user) => user.drafts)
  user: UsersEntity

  //  对应分类id
  @ManyToOne(() => CategoryEntity, (category) => category.article)
  category: CategoryEntity
}
