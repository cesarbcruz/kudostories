import { KudoStoriesVideoService } from "./kudostories-video/kudostories-video.service";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OnlineOfflineService } from "./service/online-offline.service";

@NgModule({
  imports: [CommonModule],
  providers: [KudoStoriesVideoService, OnlineOfflineService],
})
export class SharedLocalDataAccessModule {}
