import { SharedUiModule } from './../../../../libs/shared/ui/src/lib/shared-ui.module';
import { CreatorFeatureModule } from './../../../../libs/creator/feature/src/lib/creator-feature.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CreatorFeatureModule,
    SharedUiModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
