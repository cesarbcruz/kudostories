import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MenuComponent, SobreComponent, BannerComponent],
  exports: [MenuComponent, SobreComponent, BannerComponent],
})
export class HomeUiModule {}
