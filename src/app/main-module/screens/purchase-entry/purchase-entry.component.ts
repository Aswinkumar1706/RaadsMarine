import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-entry',
  templateUrl: './purchase-entry.component.html',
  styleUrls: ['./purchase-entry.component.scss']
})
export class PurchaseEntryComponent implements OnInit {

  pagetype: any;
  pageTitle:string ="";
  editPurchaseId:string ='';
  ActionbuttonText:any;

  purchaseEntryForm! : FormGroup;

 constructor(private route: ActivatedRoute,private fb : FormBuilder) {
   this.route.queryParams
     .subscribe(params => {
       console.log(params); // { pagetype: "new" }
       this.pagetype = params.pagetype;
       if(this.pagetype == 'new'){
          this.pageTitle = 'Add Purchase'
          this.ActionbuttonText = 'Purchase Now';
       }else{
         this.editPurchaseId = params.id;
         this.pageTitle = 'Edit Purchase'
         this.ActionbuttonText = 'Update';
       }
       console.log(this.pagetype); // new
     }
   );
  }

 ngOnInit(): void {
   
   this.purchaseEntryForm = this.fb.group({
      'productId':['',Validators.required],
      'itemId':['',Validators.required],
      'employeeId':['',Validators.required],
      'quantity':['',Validators.required],
      'purchaseDate':['',Validators.required],
      'description':[''],
   })

 }

 sendData(){
   
   // stop here if form is invalid
   if (this.purchaseEntryForm.invalid) {
       return;
   }

   // display form values on success
   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.purchaseEntryForm.value, null, 4));
 }

 clear(){
     this.purchaseEntryForm.reset();
 }

}
