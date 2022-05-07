import { HomeUiModule } from '@kudostories/home/ui';
import { VideoRecordingService } from './record-video/service/video-recording.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecordVideoComponent } from "./record-video/record-video.component";

@NgModule({
  imports: [CommonModule, HomeUiModule],
  declarations: [RecordVideoComponent],
  exports: [RecordVideoComponent],
  providers: [VideoRecordingService]
})
export class CreatorFeatureModule {}
