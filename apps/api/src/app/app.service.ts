import { Kudos } from './../../../../libs/api-interfaces/src/lib/api-interfaces';
import { Injectable } from '@nestjs/common';
import { Message } from '@kudostories/api-interfaces';

@Injectable()
export class AppService {

  kudosList:Kudos[]=[]


  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  saveKudos(kudos:Kudos) {
    this.kudosList.push(kudos)
  }

  getKudos(): Kudos[] {
    return this.kudosList;
  }
}
