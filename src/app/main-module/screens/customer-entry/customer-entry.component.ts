import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent implements OnInit {

   pagetype: any;
   pageTitle:string ="";
   editCustomerId:string ='';
   ActionbuttonText:any;

   customerEntryForm! : FormGroup;

  constructor(private route: ActivatedRoute,private fb : FormBuilder,private apiService: ApiService,private router : Router) {
    this.customerEntryForm = this.fb.group({
      'companyName':['',Validators.required],
      'customerName':['',Validators.required],
      'email':[''],
      'phonenumber':['',Validators.required],
      'gst':[''],
      'address':[''],
      'remarks':[''],
      'status':['',Validators.required],
   })
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { pagetype: "new" }
        this.pagetype = params.pagetype;
        if(this.pagetype == 'new'){
           this.pageTitle = 'Add Customer'
           this.ActionbuttonText = 'Create';
          
        }else{
          this.editCustomerId = params.id;
          this.pageTitle = 'Edit Customer'
          this.ActionbuttonText = 'Update';
          var customerDataList = JSON.parse(localStorage.getItem('customerData') || "[]");
          var customerData = customerDataList.find((x:any) => x.id == this.editCustomerId);
          if(customerData){
            this.customerEntryForm = this.fb.group({
              'companyName':[customerData.companyName,Validators.required],
              'customerName':[customerData.customerName,Validators.required],
              'email':[customerData.email],
              'phonenumber':[customerData.phonenumber,Validators.required],
              'gst':[customerData.gst],
              'address':[customerData.address],
              'remarks':[customerData.remarks],
              'status':[customerData.status,Validators.required],
           })
          }
          
        }
        console.log(this.pagetype); // new
      }
    );
   }

  ngOnInit(): void {
    
    
    
  }

  sendData(){
    
    // stop here if form is invalid
    if (this.customerEntryForm.invalid) {
        return;
    }
    // {
    //   'id':1,
    //   'companyName':"Navy Ship",
    //   'customerName':"Manikandan",
    //   'email':"mani@gmail.com",
    //   'phonenumber':"9876543210",
    //   'gst':"test",
    //   'address':"test",
    //   'remarks':"test",
    //   'status':"1",
    // }
    var customer = JSON.parse(localStorage.getItem('customerData')!);
    var lastId=1;
    var customerData: any[] = [];
    if(customer){
      lastId = customer.length + 2;
      customerData = customer;
      customerData.push(this.customerEntryForm.value)
    }else{
     var data = this.customerEntryForm.value;
     data['id'] = lastId;
      customerData.push(data)
    }
    this.apiService.insertCustomers(customerData);
    alert("Success");
    this.router.navigate(['main','customerlist']);
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.customerEntryForm.value, null, 4));
  }

  clear(){
      this.customerEntryForm.reset();
  }
}
