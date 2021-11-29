import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  constructor(private route: ActivatedRoute) { 
    this.productId = this.route.snapshot.paramMap.get('productid');
  }

  ngOnInit(): void {
  }

}
