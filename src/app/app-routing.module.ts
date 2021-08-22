import { AuthGuard } from './services/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'haberci/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'haberci/:id',
    loadChildren: () => import('./haberci/haberci.module').then( m => m.HaberciPageModule)
  },
  {
    path: 'giris',
    loadChildren: () => import('./giris/giris.module').then( m => m.GirisPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'arama',
    loadChildren: () => import('./arama/arama.module').then( m => m.AramaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'arama/:anahtar',
    loadChildren: () => import('./arama/arama.module').then( m => m.AramaPageModule),

  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'ekle/:güncelle',
    loadChildren: () => import('./ekle/ekle.module').then( m => m.EklePageModule)
  },
  {
    path: 'haberliste/:baslik/:site',
    loadChildren: () => import('./haberliste/haberliste.module').then( m => m.HaberlistePageModule)
  },
  {
    path: 'profilduzenleme',
    loadChildren: () => import('./profilduzenleme/profilduzenleme.module').then( m => m.ProfilduzenlemePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
