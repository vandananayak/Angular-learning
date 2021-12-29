import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { NewserverComponent } from './newserver/newserver.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ServerComponent, NewserverComponent],
  bootstrap: [AppComponent, ServerComponent],
})
export class AppModule {}
