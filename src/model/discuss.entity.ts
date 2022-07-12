/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:26:33
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
/**
 * @descripttion: 评论
 * @author: zhaodongfeng
 * @Date: 2022-06-02 17:36:25
 * @@param: {}
 */
@Entity({ name: 'discuss' })
export class DiscussEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 评论时间
  @Column('varchar')
  createTime: string;

  // 评论内容
  @Column('varchar')
  discuss_content: string;

  // 点赞量
  @Column('double')
  like_count: number;

  // 评论用户
  @Column('varchar')
  discuss_user: string;
}
