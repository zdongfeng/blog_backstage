/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-07-01 14:37:14
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-04 10:50:07
 */
import { Controller, HttpCode, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { staticUrl } from './picture.constant';


@Controller('upload')
export class PictureController {
    @Post('picture')
    @HttpCode(200)
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      return {
        code: 0,
        data:{
          url: staticUrl + file.originalname
        }
      };
    }
}
