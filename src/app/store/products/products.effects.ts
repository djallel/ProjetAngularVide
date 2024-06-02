// src/app/state/product.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as ProductActions from './products.actions';
import {Product} from "../../models/Product.model";

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() => this.http.get<Product[]>('https://api.example.com/products')
        .pipe(
          map(products => ProductActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductActions.loadProductsFailure({ error })))
        ))
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProduct),
      mergeMap(action => this.http.post<Product>('https://api.example.com/products', action.product)
        .pipe(
          map(product => ProductActions.addProductSuccess({ product })),
          catchError(error => of(ProductActions.addProductFailure({ error })))
        ))
    )
  );

  removeProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.removeProduct),
      mergeMap(action => this.http.delete(`https://api.example.com/products/${action.productId}`)
        .pipe(
          map(() => ProductActions.removeProductSuccess({ productId: action.productId })),
          catchError(error => of(ProductActions.removeProductFailure({ error })))
        ))
    )
  );

}
