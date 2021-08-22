import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AramaPageRoutingModule } from './arama-routing.module';

import { AramaPage } from './arama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AramaPageRoutingModule
  ],
  declarations: [AramaPage]
})
export class AramaPageModule {}
