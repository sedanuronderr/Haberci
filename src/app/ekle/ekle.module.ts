import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EklePageRoutingModule } from './ekle-routing.module';

import { EklePage } from './ekle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EklePageRoutingModule
  ],
  declarations: [EklePage]
})
export class EklePageModule {}
