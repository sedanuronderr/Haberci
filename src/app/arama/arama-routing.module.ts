import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AramaPage } from './arama.page';

const routes: Routes = [
  {
    path: '',
    component: AramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AramaPageRoutingModule {}
