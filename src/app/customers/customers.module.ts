import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { StoreModule } from '@ngrx/store';
import { customerReducer } from './state/customer.reducer';

const customerRoutes: Routes = [{ path: '', component: CustomerComponent }];
@NgModule({
  declarations: [
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('customers', customerReducer)
  ]
})
export class CustomersModule { }
