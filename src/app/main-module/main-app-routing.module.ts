import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEntryComponent } from './screens/customer-entry/customer-entry.component';
import { CustomerListComponent } from './screens/customer-list/customer-list.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { EmployeeEntryComponent } from './screens/employee-entry/employee-entry.component';
import { EmployeeListComponent } from './screens/employee-list/employee-list.component';
import { EmployeePurchaseHistoryListComponent } from './screens/employee-purchase-history-list/employee-purchase-history-list.component';
import { ItemDetailComponent } from './screens/item-detail/item-detail.component';
import { ItemEntryComponent } from './screens/item-entry/item-entry.component';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import { ProductEntryComponent } from './screens/product-entry/product-entry.component';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { ProjectEntryComponent } from './screens/project-entry/project-entry.component';
import { ProjectListComponent } from './screens/project-list/project-list.component';
import { PurchaseEntryComponent } from './screens/purchase-entry/purchase-entry.component';
import { PurchaseHistoryListComponent } from './screens/purchase-history-list/purchase-history-list.component';
import { VendorEntryComponent } from './screens/vendor-entry/vendor-entry.component';
import { VendorListComponent } from './screens/vendor-list/vendor-list.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"productlist",
        component:ProductListComponent
      },
      {
        path:"productentry",
        component:ProductEntryComponent
      },
      {
        path:"productdetail/:productid",
        component:ProductDetailComponent
      },
      {
        path:"itemdetail/:productid/:itemid",
        component:ItemDetailComponent
      },
      {
        path:"itementry",
        component:ItemEntryComponent
      },
      {
        path:"employeelist",
        component:EmployeeListComponent
      },
      {
        path:"employee-entry",
        component:EmployeeEntryComponent
      },
      {
        path:"employeepurchasehistory/:employeeid",
        component:EmployeePurchaseHistoryListComponent
      },
      {
        path:"purchaseentry",
        component:PurchaseEntryComponent
      },
      {
        path:"purchaselist",
        component:PurchaseHistoryListComponent
      },
      {
        path:"projectentry",
        component:ProjectEntryComponent
      },
      {
        path:"projectlist",
        component:ProjectListComponent
      },
      {
        path:"customerlist",
        component:CustomerListComponent
      },
      {
        path:"customerentry",
        component:CustomerEntryComponent
      },
      {
        path:"vendorlist",
        component:VendorListComponent
      },
      {
        path:"vendorentry",
        component:VendorEntryComponent
      },
    ],
    
  },
  {
    path:"",
    redirectTo:"/dashboard",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
