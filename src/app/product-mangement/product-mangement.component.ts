import { Component, OnInit,EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-mangement',
  templateUrl: './product-mangement.component.html',
  styleUrls: ['./product-mangement.component.css']
})
export class ProductMangementComponent{
  products: Product[]=[
    {
      ProductTitle:"Technology-1",
      description:"The application of scientific knowledge for practical purposes, especially in industry advances in computer technology",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-p1MCxsGjG3HdVQbFbHgOmAY_ZV2UeUOXQ&usqp=CAU"
    },
    {
      ProductTitle:"Technology-2",
      description:"The application of scientific knowledge for practical purposes, especially in industry advances in computer technology",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-p1MCxsGjG3HdVQbFbHgOmAY_ZV2UeUOXQ&usqp=CAU"
    },
    {
      ProductTitle:"Technology-3",
      description:"The application of scientific knowledge for practical purposes, especially in industry advances in computer technology",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-p1MCxsGjG3HdVQbFbHgOmAY_ZV2UeUOXQ&usqp=CAU"
    },
    {
      ProductTitle:"Technology-4",
      description:"The application of scientific knowledge for practical purposes, especially in industry advances in computer technology",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-p1MCxsGjG3HdVQbFbHgOmAY_ZV2UeUOXQ&usqp=CAU"
    },
    {
      ProductTitle:"Technology-5",
      description:"The application of scientific knowledge for practical purposes, especially in industry advances in computer technology",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-p1MCxsGjG3HdVQbFbHgOmAY_ZV2UeUOXQ&usqp=CAU"
    },
    {
      ProductTitle:"Technology-6",
      description:"The application of scientific knowledge for practical purposes, especially in industry advances in computer technology",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-p1MCxsGjG3HdVQbFbHgOmAY_ZV2UeUOXQ&usqp=CAU"
    }
  ]

  productsSentByChild: string[]=[];
 
  getProductDetailsFromChild(productTitle:string){
    this.productsSentByChild.push(productTitle)
  }

}
