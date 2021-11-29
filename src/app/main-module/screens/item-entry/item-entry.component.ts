import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.scss']
})
export class ItemEntryComponent implements OnInit {

  pagetype: any;
  pageTitle:string ="";
  editItemId:string ='';
  productId:any;
  ActionbuttonText:any;
 
  itemEntryForm! : FormGroup;

 constructor(private route: ActivatedRoute,private fb : FormBuilder) {
   this.route.queryParams
     .subscribe(params => {
       console.log(params); // { pagetype: "new" }
       this.pagetype = params.pagetype;
       this.productId = params.productid;
       if(this.pagetype == 'new'){
          this.pageTitle = 'Add Item'
          this.ActionbuttonText = 'Create';
          
       }else{
         this.editItemId = params.id;
         this.pageTitle = 'Edit Item'
         this.ActionbuttonText = 'Update';
       }
       console.log(this.pagetype); // new
     }
   );
  }

 ngOnInit(): void {
   
   this.itemEntryForm = this.fb.group({
     'projectName':['',Validators.required],
      'productName':['',Validators.required],
      'quantity':['',Validators.required],
      // 'rate':['',Validators.required],
      // 'purchaseAddress':['',Validators.required],
      'description':[''],
      'status':[''],
   })

 }

 sendData(){
   
   // stop here if form is invalid
   if (this.itemEntryForm.invalid) {
       return;
   }

   // display form values on success
   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.itemEntryForm.value, null, 4));
 }

 clear(){
     this.itemEntryForm.reset();
 }
}
