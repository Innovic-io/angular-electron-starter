import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import '../styles/styles.scss';
import '../styles/headings.css';

import { FsService } from './services/fs.service';
import { metaReducers, reducers } from './store/index';
import { FilesEffects } from './store/files/files.effects';
import { SharedModule } from './shared/shared.module';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      FilesEffects
    ]),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    FsService,
    ENV_PROVIDERS
  ]
})
export class AppModule {
}
