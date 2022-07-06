/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-06 15:44:49
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
/**
 * @descripttion: 
 * @author: zhaodongfeng
 * @Date: 2022-06-02 17:36:25
 * @@param: {}
 */
@Entity({ name: 'drafts' })
export class DraftsEntity {
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
  @Column("varchar")
  createTime: string;

  // 更新时间
  @Column('varchar',{
    default: () => 0
  })
  updateTime?: string;
}
