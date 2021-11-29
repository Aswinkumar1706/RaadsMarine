import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  posts:any = [];
  constructor(private http: HttpClient) {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    
   }

  ngOnInit(): void {
    

    setTimeout(() =>{
       this.posts = [
         {
          'id':'1',
          'productName':'Navy Ship',
          'Budget':240000,
          'customerName':'Manikandan',
          'startDate':'29-11-2021',
          'endDate':'01-02-2022',
          'description':'test',
          'status':'1',
         }
       ];
       this.dtTrigger.next();
    },1000)
  //  $("#example").DataTable()
    // this.http.get('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe(posts => {
    //     this.posts = posts;
    //     this.dtTrigger.next();
    // });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
