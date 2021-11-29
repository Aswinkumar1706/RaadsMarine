import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { PurchaseEntryComponent } from './screens/purchase-entry/purchase-entry.component';
import { EmployeeEntryComponent } from './screens/employee-entry/employee-entry.component';
import { EmployeeListComponent } from './screens/employee-list/employee-list.component';
import { ItemEntryComponent } from './screens/item-entry/item-entry.component';
import { ItemDetailComponent } from './screens/item-detail/item-detail.component';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import { ProductEntryComponent } from './screens/product-entry/product-entry.component';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseHistoryListComponent } from './screens/purchase-history-list/purchase-history-list.component';
import { EmployeePurchaseHistoryListComponent } from './screens/employee-purchase-history-list/employee-purchase-history-list.component';
import { ProjectEntryComponent } from './screens/project-entry/project-entry.component';
import { CustomerEntryComponent } from './screens/customer-entry/customer-entry.component';
import { VendorEntryComponent } from './screens/vendor-entry/vendor-entry.component';
import { ProjectListComponent } from './screens/project-list/project-list.component';
import { CustomerListComponent } from './screens/customer-list/customer-list.component';
import { VendorListComponent } from './screens/vendor-list/vendor-list.component';
@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    ProductEntryComponent,
    ProductDetailComponent,
    ItemDetailComponent,
    ItemEntryComponent,
    EmployeeListComponent,
    EmployeeEntryComponent,
    PurchaseEntryComponent,
    PurchaseHistoryListComponent,
    EmployeePurchaseHistoryListComponent,
    ProjectEntryComponent,
    CustomerEntryComponent,
    VendorEntryComponent,
    ProjectListComponent,
    CustomerListComponent,
    VendorListComponent],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainAppModule { }
