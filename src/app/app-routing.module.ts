import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [ 
  { path: 'products', component: ProductListComponent}, 
  { path: 'product/:id', component: ProductDetailComponent}, 
  { path: 'login', component: LoginComponent}, 
  { path: 'register', component: RegisterComponent}, 
  { path: 'user', component: UserDetailComponent}, 
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: '**', redirectTo: '/products'},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
