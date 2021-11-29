import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-purchase-history-list',
  templateUrl: './employee-purchase-history-list.component.html',
  styleUrls: ['./employee-purchase-history-list.component.scss']
})
export class EmployeePurchaseHistoryListComponent implements OnInit {

  employeeId: any;
  itemName:any;
  constructor(private route: ActivatedRoute) { 
    this.employeeId = this.route.snapshot.paramMap.get('employeeid');
    this.itemName = 'Tomato';
  }

  ngOnInit(){

  }

}
