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
    
  //  $("#example").DataTable()
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
        this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
