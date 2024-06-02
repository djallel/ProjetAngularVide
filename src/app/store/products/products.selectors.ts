
// src/app/state/products.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './products.reducer';

export const selectProductState = createFeatureSelector<ProductState>('product');

export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectProductError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
);
