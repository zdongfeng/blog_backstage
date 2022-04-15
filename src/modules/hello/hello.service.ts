/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 17:28:59
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-04-15 10:48:39
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id): string {
    return `HELLO WORLD! ${id}`;
  }

  save(message): string {
    return `Set Hello Done.${message}`;
  }

  update(id: string, message: string): string {
    return `Update Hello Done. ${id}:${message}`;
  }

  remove(id: number) {
    return `${id} Record Was Removed.`;
  }
}
