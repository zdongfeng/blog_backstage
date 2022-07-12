/*
 * @Descripttion:
 * @Author: zhaodongfeng
 * @Date: 2022-07-01 14:37:01
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-12 16:27:44
 */
import { Module } from '@nestjs/common';
import { PictureController } from './picture.controller';
import { PictureService } from './picture.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: path.join(__dirname, '../../../public/picture'),
        filename(req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  ],
  controllers: [PictureController],
  providers: [PictureService],
})
export class PictureModule {}
