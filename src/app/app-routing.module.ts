import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components here
import { HomeComponent } from './components/home/home.component';
import { UserpageComponent } from './components/userpage/userpage.component';
const routes: Routes = [
  //put paths here, {path: '', component: Component},
  { 
    path: '',
    component: HomeComponent
  },
  {
    path: 'u/:id',
    component: UserpageComponent
  }
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
