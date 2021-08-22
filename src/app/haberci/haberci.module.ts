import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaberciPageRoutingModule } from './haberci-routing.module';

import { HaberciPage } from './haberci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaberciPageRoutingModule
  ],
  declarations: [HaberciPage]
})
export class HaberciPageModule {}
