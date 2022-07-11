/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-07 16:56:31
 */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DraftsEntity } from './drafts.entity';
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

  @Column({ length: 20 })
  username: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  salt?: string;

  @Column('double', {
    default: () => 0
  })
  photo?: number;

  @Column({
    default: () => 'true'
  })
  status: boolean;

  @Column({
    default: () => 0
  })
  read_count: boolean;

  @Column({
    default: () => 0
  })
  like_count: boolean;
  
  @OneToMany(() => DraftsEntity, (drafts) => drafts.user)
  drafts: DraftsEntity[]
}
