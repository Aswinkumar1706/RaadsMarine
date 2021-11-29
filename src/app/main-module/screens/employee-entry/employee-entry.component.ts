import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.scss']
})
export class EmployeeEntryComponent implements OnInit {

  pagetype: any;
   pageTitle:string ="";
   editEmployeeId:string ='';
   ActionbuttonText:any;

  employeeEntryForm! : FormGroup;

  constructor(private route: ActivatedRoute,private fb : FormBuilder) {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { pagetype: "new" }
        this.pagetype = params.pagetype;
        if(this.pagetype == 'new'){
           this.pageTitle = 'Add Employee'
           this.ActionbuttonText = 'Create';
        }else{
          this.editEmployeeId = params.id;
          this.pageTitle = 'Edit Employee'
          this.ActionbuttonText = 'Update';
        }
        console.log(this.pagetype); // new
      }
    );
   }

  ngOnInit(): void {
    
    this.employeeEntryForm = this.fb.group({
       'empName':['',Validators.required],
       'empId':['',Validators.required],
       'dob':['',Validators.required],
       'joiningDate':['',Validators.required],
       'remarks':[''],
       'role':['',Validators.required],
       'status':['',Validators.required],
    })

  }

  sendData(){
    
    // stop here if form is invalid
    if (this.employeeEntryForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employeeEntryForm.value, null, 4));
  }

  clear(){
      this.employeeEntryForm.reset();
  }

}
