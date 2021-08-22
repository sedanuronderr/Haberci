import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaberlistePage } from './haberliste.page';

const routes: Routes = [
  {
    path: '',
    component: HaberlistePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaberlistePageRoutingModule {}
