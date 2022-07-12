/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-04-14 17:28:59
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:27:37
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

  getGoods(id) {
    console.log(id);
    return {
      code: 200,
      data: {
        id: 80,
        storeName: '林林的百货商店',
        adress: '宁波市鄞州区福明街道索米客超市',
        productsList: [
          {
            name: '百事可乐',
            desc: '喝的',
            price: 3,
            stock: 99,
          },
          {
            name: '乐事薯片',
            desc: '吃的',
            price: 8,
            stock: 19,
          },
          {
            name: '黄鹤楼(1916)',
            desc: '香烟',
            price: 1000,
            stock: 8,
          },
        ],
      },
    };
  }
}
