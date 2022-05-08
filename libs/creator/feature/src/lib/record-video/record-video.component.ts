import { VideoRecordingService } from './service/video-recording.service';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'creator-record-video',
  templateUrl: './record-video.component.html',
  styleUrls: ['./record-video.component.less']
})
export class RecordVideoComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<Blob>();
  

  @ViewChild('videoElement') videoElement: any;
  video: any;
  isPlaying = false;
  displayControls = true;
  isAudioRecording = false;
  isVideoRecording = false;
  videoRecordedTime: string | undefined;
  videoBlobUrl: SafeUrl | undefined;
  videoBlob: Blob | undefined;
  videoName: string | undefined;
  videoStream: MediaStream | undefined;
  videoConf = { video: { facingMode: 'user' }, audio: true };

  constructor(
    private ref: ChangeDetectorRef,
    private videoRecordingService: VideoRecordingService,
    private sanitizer: DomSanitizer
  ) {
    this.videoRecordingService.recordingFailed().subscribe(() => {
      this.isVideoRecording = false;
      this.ref.detectChanges();
    });

    this.videoRecordingService.getRecordedTime().subscribe((time) => {
      this.videoRecordedTime = time;
      this.ref.detectChanges();
    });

    this.videoRecordingService.getStream().subscribe((stream) => {
      this.videoStream = stream;
      this.ref.detectChanges();
    });

    this.videoRecordingService.getRecordedBlob().subscribe((data) => {
      this.videoBlob = data.blob;
      this.videoName = data.title;
      this.videoBlobUrl = this.sanitizer.bypassSecurityTrustUrl(data.url);
      this.ref.detectChanges();
    });

  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.video = this.videoElement.nativeElement;
  }

  startVideoRecording() {
    if (!this.isVideoRecording) {
      this.video.controls = false;
      this.isVideoRecording = true;
      this.videoRecordingService
        .startRecording(this.videoConf)
        .then((stream) => {
          // this.video.src = window.URL.createObjectURL(stream);
          this.video.srcObject = stream;
          this.video.muted = true;
          this.video.volume = 0;
          this.video.play();
        })
        .catch(function (err) {
          console.log(err.name + ': ' + err.message);
        });
    }
  }

  abortVideoRecording() {
    if (this.isVideoRecording) {
      this.isVideoRecording = false;
      this.videoRecordingService.abortRecording();
      this.video.controls = false;
    }
  }

  stopVideoRecording() {
    if (this.isVideoRecording) {
      this.videoRecordingService.stopRecording();
      this.video.srcObject = this.videoBlobUrl;
      this.isVideoRecording = false;
      this.video.controls = true;
      this.video.muted = false;
      this.video.volume = 1;
    }
  }

  clearVideoRecordedData() {
    this.videoBlobUrl = undefined;
    this.video.srcObject = null;
    this.video.controls = false;
    this.ref.detectChanges();
  }

  sendVideoRecordedData() {
    if(this.videoBlob){
      const blob = new Blob([this.videoBlob], { type: 'video/webm' });
      this.newItemEvent.emit(blob);
      this.clearVideoRecordedData();
    }  
  }

  ngOnDestroy(): void {
    
  }

  _downloadFile(data: any, type: string, filename: string): any {
    const blob = new Blob([data], { type: type });
    const url = window.URL.createObjectURL(blob);
    //this.video.srcObject = stream;
    //const url = data;
    const anchor = document.createElement('a');
    anchor.download = filename;
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}
