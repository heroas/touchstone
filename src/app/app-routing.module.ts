import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { StartComponent } from './start';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'start', component: StartComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

export const routing = RouterModule.forRoot(routes);
// export class AppRoutingModule { }
