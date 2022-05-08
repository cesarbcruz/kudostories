import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre/sobre.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SobreComponent, BannerComponent],
  exports: [SobreComponent, BannerComponent],
})
export class HomeUiModule {}
