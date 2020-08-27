import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { CoreModule } from '@core/core.module';
import { IdentityModule } from '@identity/identity.module';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app.layout';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    CoreModule.forRoot({}),
    IdentityModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, AppLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
