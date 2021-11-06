import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpriteAnimationModule } from '../libs/sprite-animation';
const imports = [BrowserModule, FormsModule, SpriteAnimationModule];
@NgModule({
  imports,
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
