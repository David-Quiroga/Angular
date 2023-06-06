// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProductComponent } from './pages/product/product.component';
// import { CategoryComponent } from './pages/category/category.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { AuthRoutingModule } from './auth/auth-routing/auth-routing.module';
// import { PagesModule } from './pages/pages.module';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'product', component: ProductComponent },
//   { path: 'category', component: CategoryComponent },
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: '**', component: NotFoundComponent },
// ];

// @NgModule({
//   declarations: [],
//   imports: [CommonModule, RouterModule.forRoot(routes), PagesModule],
//   exports: [RouterModule, AuthRoutingModule, PagesModule],
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NoPagesFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
