import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaberciPage } from './haberci.page';

const routes: Routes = [
  {
    path: '',
    component: HaberciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaberciPageRoutingModule {}
