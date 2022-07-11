/*
 * @Descripttion: 文章标签
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-11 15:21:06
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { ActicleEntity } from './article.entity';
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
  @Column("varchar")
  tag_createTime: string;

  // @OneToMany(() => ActicleEntity, (drafts) => drafts.user)
  // drafts: DraftsEntity[]
}
