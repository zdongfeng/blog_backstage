/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-06-02 11:28:18
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:28:07
 */
import * as crypto from 'crypto';

export function addSalt() {
  return crypto.randomBytes(3).toString('base64');
}

export function encript(userPassword: string, salt: string): string {
  return crypto
    .pbkdf2Sync(userPassword, salt, 10000, 16, 'sha256')
    .toString('base64');
}
