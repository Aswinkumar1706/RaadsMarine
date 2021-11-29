import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

    getCustomers(){
       
    }
    getCustomer(){
      
    }
    insertCustomers(customerData:any){
      localStorage.setItem('customerData',JSON.stringify(customerData));
    }
    updateCustomers(){
      
    }
}
