import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { PacienteComponent } from './paciente/paciente.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    PagesComponent,
    PacienteComponent,
    DoctorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    PagesComponent,
  ],
})
export class PagesModule {}
