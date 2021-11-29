import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  customers:any = [];
  constructor(private http: HttpClient) {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    
   }

  ngOnInit(): void {
    
  //  $("#example").DataTable()
  setTimeout(() =>{

    //  this.customers = [
    //   {
    //     'id':1,
    //     'companyName':"Navy Ship",
    //     'customerName':"Manikandan",
    //     'email':"mani@gmail.com",
    //     'phonenumber':"9876543210",
    //     'gst':"test",
    //     'address':"test",
    //     'remarks':"test",
    //     'status':"1",
    //   }
    //  ]
    this.customers = JSON.parse(localStorage.getItem('customerData') || "[]");
     this.dtTrigger.next();
  },1000)
    // this.http.get('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe(posts => {
    //     this.posts = posts;
       
    // });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
