
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import path from 'path';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
    

{path:'',component:ConnexionComponent},
  {path:'inscription',component:InscriptionComponent},
  { path: '', redirectTo: '/page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
}