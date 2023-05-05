import { Component } from '@angular/core';
import { products } from '../../products';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})

export class ProductListComponent {
  // product: any

  // products = [1,2,3,4]
  products : any

  ngOnInit () {
    this.products = products;
  }


}
