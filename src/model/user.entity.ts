/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:26:40
 */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from './article.entity';
// import { DraftsEntity } from './drafts.entity';
/**
 * @descripttion:
 * @author: zhaodongfeng
 * @Date: 2022-06-02 17:36:25
 * @@param: {}
 */
@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 用户名
  @Column({ length: 20 })
  username: string;

  // 账号密码
  @Column('varchar', {
    select: false,
  })
  password: string;

  // 盐
  @Column('varchar', {
    select: false,
  })
  salt?: string;

  // 手机号
  @Column('double', {
    default: () => 0,
  })
  photo?: number;

  // 账号状态
  @Column({
    type: 'tinyint',
    default: () => '1',
  })
  status: number;

  // 阅读量
  @Column({
    default: () => 0,
  })
  read_count: number;

  // 点赞量
  @Column({
    default: () => 0,
  })
  like_count: number;

  // 关联文章
  @OneToMany(() => ArticleEntity, (article) => article.user)
  article: ArticleEntity[];
}
