import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ScratchComponent } from './scratch/scratch.component';

const routes: Routes = [
  { path: '', redirectTo: '/scratch', pathMatch: 'full'},
  {
    path: 'account',
    component: HomeComponent
  },
  {
    path: 'scratch',
    component: ScratchComponent
  },
  { 
    path: 'account', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { 
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [authGuard]
  },
  { 
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
