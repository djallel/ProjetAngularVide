import {Product} from "../../models/Product.model";
import {createReducer, on} from "@ngrx/store";
import * as ProductActions from './products.actions';
import {state} from "@angular/animations";

export interface ProductState {
  products: Product[];
  error: any;
}

export const initialState: ProductState = {
  products: [],
  error: null
};

export const _productReducer =  createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({ ...state, error })),
  on(ProductActions.addProductSuccess, (state, { product }) => ({ ...state, products: [...state.products, product] })),
  on(ProductActions.addProductFailure, (state, { error }) => ({ ...state, error })),
  on(ProductActions.removeProductSuccess, (state, { productId }) => ({
    ...state,
    products: state.products.filter(product => product.id !== productId)
  })),
  on(ProductActions.removeProductFailure, (state, { error }) => ({ ...state, error }))
);
