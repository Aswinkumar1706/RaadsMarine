import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  productId: any;
  itemName:any;
  constructor(private route: ActivatedRoute) { 
    this.productId = this.route.snapshot.paramMap.get('productid');
    this.itemName = 'Tomato';
  }

  ngOnInit(){

  }
}
