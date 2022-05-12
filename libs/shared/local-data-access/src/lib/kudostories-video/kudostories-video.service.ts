import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { db } from './kudostories-video.db';

@Injectable({
  providedIn: 'root'
})
export class KudoStoriesVideoService {

  constructor(private httpClient: HttpClient) { }

  async getKudos(de:string, para:string) {
    return await db.kudoStoriesVideo
      .where({
        de,
        para
      })
      .first();
  }

  async getKudosAll() {
    return await db.kudoStoriesVideo.toArray();
  }

  async removeKudos(id:number|undefined){
    if(id){
      return await db.kudoStoriesVideo.delete(id);
    }      
  }

  async saveKudos(de:string, para:string, video: Blob) {
    await db.kudoStoriesVideo.add({
      de,
      para,
      video
    });
  }


}