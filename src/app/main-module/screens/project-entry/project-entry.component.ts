import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.scss']
})
export class ProjectEntryComponent implements OnInit {

   pagetype: any;
   pageTitle:string ="";
   editProjectId:string ='';
   ActionbuttonText:any;

   productForm! : FormGroup;

  constructor(private route: ActivatedRoute,private fb : FormBuilder) {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { pagetype: "new" }
        this.pagetype = params.pagetype;
        if(this.pagetype == 'new'){
           this.pageTitle = 'Add Project'
           this.ActionbuttonText = 'Create';
        }else{
          this.editProjectId = params.id;
          this.pageTitle = 'Edit Project'
          this.ActionbuttonText = 'Update';
        }
        console.log(this.pagetype); // new
      }
    );
   }

  ngOnInit(): void {
    
    this.productForm = this.fb.group({
       'productName':['',Validators.required],
       'Budget':['',Validators.required],
       'customerName':['',Validators.required],
       'startDate':['',Validators.required],
       'endDate':['',Validators.required],
       'description':[''],
       'status':[''],
    })

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
