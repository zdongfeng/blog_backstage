/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:58:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-17 11:11:20
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  salt ?: string;

  @Column("double")
  photo ?: number;
  
  @Column()
  status: boolean;
}
