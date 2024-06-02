/**
 * Actions : Les actions sont des objets qui décrivent un événement unique que quelque chose
 * s'est produit (par exemple, une commande utilisateur, une réponse serveur).
 */
import {createAction, props} from "@ngrx/store";
import {Product} from "../../models/Product.model";



export const loadProducts = createAction('[Product] load Products')

/**
 * C'est le type de l'action. Dans NgRx,
 * chaque action a un type qui est une chaîne de caractères unique identifiant cette action.
 * Les crochets [Product] sont une convention courante pour indiquer le domaine ou la fonctionnalité à
 * laquelle l'action appartient,
 * ici "Product". Le reste de la chaîne décrit ce que fait l'action, ici "Load Products Success".
 */
export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: Product[] }>());
export const loadProductsFailure = createAction('[Product] Load Products Failure', props<{ error: any }>());

export const addProduct = createAction('[Product] Add Product', props<{ product: Product }>());
export const addProductSuccess = createAction('[Product] Add Product Success', props<{ product: Product }>());
export const addProductFailure = createAction('[Product] Add Product Failure', props<{ error: any }>());

export const removeProduct = createAction('[Product] Remove Product', props<{ productId: number }>());
export const removeProductSuccess = createAction('[Product] Remove Product Success', props<{ productId: number }>());
export const removeProductFailure = createAction('[Product] Remove Product Failure', props<{ error: any }>());
