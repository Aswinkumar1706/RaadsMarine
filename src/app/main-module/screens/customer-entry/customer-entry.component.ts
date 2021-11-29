import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute,private fb : FormBuilder) {
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
        }
        console.log(this.pagetype); // new
      }
    );
   }

  ngOnInit(): void {
    
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

  }

  sendData(){
    
    // stop here if form is invalid
    if (this.customerEntryForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.customerEntryForm.value, null, 4));
  }

  clear(){
      this.customerEntryForm.reset();
  }
}
