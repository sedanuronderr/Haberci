import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilduzenlemePageRoutingModule } from './profilduzenleme-routing.module';

import { ProfilduzenlemePage } from './profilduzenleme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilduzenlemePageRoutingModule
  ],
  declarations: [ProfilduzenlemePage]
})
export class ProfilduzenlemePageModule {}
