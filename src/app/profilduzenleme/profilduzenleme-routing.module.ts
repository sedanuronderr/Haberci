import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilduzenlemePage } from './profilduzenleme.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilduzenlemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilduzenlemePageRoutingModule {}
