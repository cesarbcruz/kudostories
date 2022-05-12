import Dexie, { Table } from 'dexie';

export interface KudoStoriesVideo {
  id?: number;
  de: string;
  para: string;
  video: Blob;
}

export class KudoStoriesVideoDB extends Dexie {
  kudoStoriesVideo!: Table<KudoStoriesVideo, number>;

  constructor() {
    super('KudoStoriesVideoDB');
    this.version(3).stores({
      kudoStoriesVideo: '++id'
    });
  }
}

export const db = new KudoStoriesVideoDB();
