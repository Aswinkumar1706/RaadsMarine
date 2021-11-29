import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-entry',
  templateUrl: './vendor-entry.component.html',
  styleUrls: ['./vendor-entry.component.scss']
})
export class VendorEntryComponent implements OnInit {

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
          this.pageTitle = 'Add Vendor'
          this.ActionbuttonText = 'Create';
       }else{
         this.editCustomerId = params.id;
         this.pageTitle = 'Edit Vendor'
         this.ActionbuttonText = 'Update';
       }
       console.log(this.pagetype); // new
     }
   );
  }

 ngOnInit(): void {
   
   this.customerEntryForm = this.fb.group({
      'vendorCompName':['',Validators.required],
      'vendorName':['',Validators.required],
      'productName':['',Validators.required],
      'email':[''],
      'phoneNumber':['',Validators.required],
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
