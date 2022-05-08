import { Kudos } from "./../../../../libs/api-interfaces/src/lib/api-interfaces";
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { AnyFilesInterceptor, FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

import { Message } from "@kudostories/api-interfaces";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  getData(): Message {
    return this.appService.getData();
  }

  @Post("kudos")
  postKudos(@Body() kudos: Kudos) {
    return this.appService.saveKudos(kudos);
  }

  @Get("kudos")
  getKudos(): Kudos[] {
    return this.appService.getKudos();
  }

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  uploadedFile(file) {
    if(file){
      return this.appService.saveKudos({de:'',para:'',video:file});
    }    
  }
}
