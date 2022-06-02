/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-06-01 15:37:33
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-01 15:52:32
 */
import { join } from 'path';
export default {
  type: 'mysql',
  // host: 'localhost',
  // socketPath: '/tmp/mysql.sock',
  port: 3306,
  username: 'root',
  password: 'Zhaodongfang123...',
  database: 'dbtest',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
};
