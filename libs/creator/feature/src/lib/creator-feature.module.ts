
        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
import { RecordVideoComponent } from './record-video/record-video.component';
        
        @NgModule({
          imports: [
            CommonModule
          ],
          declarations: [
            RecordVideoComponent
          ],
          exports: [RecordVideoComponent]
        })
        export class CreatorFeatureModule { }
        