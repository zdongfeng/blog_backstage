/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 14:26:13
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-01 14:33:04
 */
import * as fs from 'fs';
import * as path from 'path';

// 判断是否是开发环境
const isProd = process.env.NODE_ENV === 'production';

function parseEnv() {
  // 引入文件
  const localEnv = path.resolve('.env');
  // 引入线上环境文件
  const prodEnv = path.resolve('.env.prod');

  // existsSync: 以同步的方法检测目录是否存在。如果目录存在 返回 true ，如果目录不存在 返回false
  if (!fs.existsSync(localEnv) && !fs.existsSync(prodEnv)) {
    throw new Error('缺少环境配置文件');
  }

  // 判断是开发环境还是线上环境从而返回对应的filePath
  const filePath = isProd && fs.existsSync(prodEnv) ? prodEnv : localEnv;
  return { path: filePath };
}

export default parseEnv();
