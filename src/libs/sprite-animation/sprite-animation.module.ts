import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpriteAnimationComponent } from '.';

const declarations = [SpriteAnimationComponent];

@NgModule({
  imports: [CommonModule],
  declarations,
  exports: declarations,
})
export class SpriteAnimationModule {}
