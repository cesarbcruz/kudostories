import { Injectable, NgZone } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import * as moment from "moment";
import { Observable, Subject } from 'rxjs';

interface RecordedVideoOutput {
  blob: Blob;
  url: string;
  title: string;
}

@Injectable()
export class VideoRecordingService {

  private stream!: MediaStream;
  private recorder!: RecordRTC;
  private interval: number | undefined;
  private startTime: moment.Moment | undefined;
  private _stream = new Subject<MediaStream>();
  private _recorded = new Subject<RecordedVideoOutput>();
  private _recordedUrl = new Subject<string>();
  private _recordingTime = new Subject<string>();
  private _recordingFailed = new Subject<string>();


  getRecordedUrl(): Observable<string> {
    return this._recordedUrl.asObservable();
  }
  
  getRecordedBlob(): Observable<RecordedVideoOutput> {
    return this._recorded.asObservable();
  }

  getRecordedTime(): Observable<string> {
    return this._recordingTime.asObservable();
  }

  recordingFailed(): Observable<string> {
    return this._recordingFailed.asObservable();
  }

  getStream(): Observable<MediaStream> {
    return this._stream.asObservable();
  }

  startRecording( conf: any ): Promise<any> {
    var browser = <any>navigator;
    this._recordingTime.next('00:00');
    return new Promise((resolve, reject) => {
      browser.mediaDevices.getUserMedia(conf).then((s: MediaStream) => {
        this.stream = s;
        this.record();
        resolve(this.stream);
      }).catch((error: string) => {
        this._recordingFailed.next(error);
        reject;
      });
    });
  }

  abortRecording() {
    this.stopMedia();
  }

  private record() {
    console.log('record')
    this.recorder = new RecordRTC(this.stream, {
      type: 'video',
      mimeType: 'video/webm'
    });
    this.recorder.startRecording();
    this.startTime = moment();
    this.interval = setInterval(
      () => {
        const currentTime = moment();
        const diffTime = moment.duration(currentTime.diff(this.startTime));
        const time = this.toString(diffTime.minutes()) + ':' + this.toString(diffTime.seconds());
        this._recordingTime.next(time);
        this._stream.next(this.stream);
      },
      500
    );
  }

  private toString(value:any) {
    let val = value;
    if (!value) {
      val = '00';
    }
    if (value < 10) {
      val = '0' + value;
    }
    return val;
  }

  stopRecording() {
    if (this.recorder) {
      this.recorder.stopRecording(this.processVideo.bind(this));
    }
  }

  private processVideo() {
    console.log('processVideo', this.recorder)
    const recordedBlob = this.recorder.getBlob();
    const recordedName = encodeURIComponent('video_' + new Date().getTime() + '.webm');
    this._recorded.next({ blob: recordedBlob, url: URL.createObjectURL(recordedBlob), title: recordedName });
    this.stopMedia();
  }

  private stopMedia() {
    if (this.recorder) {
      this.recorder.stopRecording();
      clearInterval(this.interval);
      this.startTime = undefined;
      if (this.stream) {
        this.stream.getAudioTracks().forEach(track => track.stop());
        this.stream.getVideoTracks().forEach(track => track.stop());
      }
    }
  }
}
