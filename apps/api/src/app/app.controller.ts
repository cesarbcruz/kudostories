import { Kudos } from "./../../../../libs/api-interfaces/src/lib/api-interfaces";
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { Message } from "@kudostories/api-interfaces";
import { AppService } from "./app.service";
import { join } from "path";
import { createReadStream } from "fs";

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

  @Post("upload")
  @UseInterceptors(AnyFilesInterceptor())
  async uploadedFile(@Request() req) {
    return req.files.map(file => file.filename);
  }

  @Get("video/:id")
  getFile(@Param('id') id): StreamableFile {
    const file = createReadStream(join(process.cwd(), `/upload/${id}`));
    return new StreamableFile(file);
  }

}
