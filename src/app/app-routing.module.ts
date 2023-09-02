import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: '/account', pathMatch: 'full'},
  { 
    path: 'account', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { 
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
