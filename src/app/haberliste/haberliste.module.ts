import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaberlistePageRoutingModule } from './haberliste-routing.module';

import { HaberlistePage } from './haberliste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaberlistePageRoutingModule
  ],
  declarations: [HaberlistePage]
})
export class HaberlistePageModule {}
