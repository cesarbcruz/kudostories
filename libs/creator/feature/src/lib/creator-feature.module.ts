import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeUiModule } from '@kudostories/home/ui';
import { VideoRecordingService } from './record-video/service/video-recording.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecordVideoComponent } from "./record-video/record-video.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  imports: [CommonModule, HomeUiModule, MatFormFieldModule, MatSnackBarModule, BrowserAnimationsModule],
  declarations: [RecordVideoComponent],
  exports: [RecordVideoComponent],
  providers: [VideoRecordingService]
})
export class CreatorFeatureModule {}
