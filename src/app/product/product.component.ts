import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Product.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ProductState} from "../store/products/products.reducer";
import * as ProductActions from "../store/products/products.actions";
import {selectAllProducts, selectProductError} from "../store/products/products.selectors";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products$: Observable<Product[]>;
  error$: Observable<any>;
  newProductName: string ='';
  newProductPrice: number =-1;
  constructor(private store: Store) {
    this.products$ = this.store.select(selectAllProducts);
    this.error$ = this.store.select(selectProductError);
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  addProduct() {
    if (this.newProductName && this.newProductPrice) {
      const newProduct: Product = {
        id: -1, // l'ID sera généré par le serveur
        name: this.newProductName,
        price: this.newProductPrice
      };
      this.store.dispatch(ProductActions.addProduct({ product: newProduct }));
      this.newProductName = '';
      this.newProductPrice = -1;
    }
  }

  removeProduct(productId: number) {
    this.store.dispatch(ProductActions.removeProduct({ productId }));
  }

}
