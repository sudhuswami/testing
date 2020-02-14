import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { componentFactoryName } from '@angular/compiler';
import { PostsComponent } from './modules/posts/posts.component';
import { ShowComponent } from './dialogs/show/show.component';


const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[
    {
      path:'',
      component:DashboardComponent
    },
    {
    path: 'posts',
    component:PostsComponent
  },
  {
    path:'show',
    component:ShowComponent
  }
          ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
