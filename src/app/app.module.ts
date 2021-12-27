import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NewComponent],
  bootstrap: [AppComponent, NewComponent],
})
export class AppModule {}
