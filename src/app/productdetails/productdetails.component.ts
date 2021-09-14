import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent  {
  @Input() productObj : Product={
    ProductTitle:"",
    productImage:"",
    description:""
  };

  @Output() myEvent=new EventEmitter

  sendProductDetailsToParent(productTitle:any){
     this.myEvent.emit(productTitle);
  }
}
