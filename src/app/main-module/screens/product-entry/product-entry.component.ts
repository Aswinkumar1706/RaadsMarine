import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup,FormBuilder,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.scss']
})
export class ProductEntryComponent implements OnInit {
  pagetype: any;
   pageTitle:string ="";
   editProductId:string ='';
   ActionbuttonText:any;

   productForm! : FormGroup;
   url: string = "" ;

  constructor(private route: ActivatedRoute,private fb : FormBuilder) {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { pagetype: "new" }
        this.pagetype = params.pagetype;
        if(this.pagetype == 'new'){
           this.pageTitle = 'Add Product'
           this.ActionbuttonText = 'Create';
        }else{
          this.editProductId = params.id;
          this.pageTitle = 'Edit Product'
          this.ActionbuttonText = 'Update';
        }
        console.log(this.pagetype); // new
      }
    );
   }

  ngOnInit(): void {
    
    this.productForm = this.fb.group({
       'productId':['',Validators.required],
       'productName':['',Validators.required],
       'unit':['',Validators.required],
       'quantity':['',Validators.required],
       'brand':['',Validators.required],
       'Category':'',
       'gstvalue':'',
       'gstMethod':'',
       'minQAlert':"",
      //  'Budget':['',Validators.required],
      
       'startDate':['',Validators.required],
       'invoiceNo':[''],
      
      
       'endDate':[''],
       'description':[''],
       'status':[''],
    })

  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  sendData(){
    
    // stop here if form is invalid
    if (this.productForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.productForm.value, null, 4));
  }

  clear(){
      this.productForm.reset();
  }
}
