import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestComponent } from './suggest/suggest.component';
import { NotFoundComponent } from './404/404.component';


 //Routes for app.
const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/suggest', 
    pathMatch: 'full' 
  },
  {
    path: 'suggest',
    component: SuggestComponent
  },
  {
    path: 'about', // Lazy loaded
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


/**
 * Routing module.
 * 
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],
  
  declarations: []
})
export class AppRoutingModule { }
