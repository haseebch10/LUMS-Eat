import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
   
    fetch(`/menu/find/${collectionUrlParam}`)
    .then(res=> res.json())
  
   
  );



  /*
  export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections.find(collection=> collection.id== COLLECTION_ID_MAP[collectionUrlParam])
  );
  */

  /*
const COLLECTION_ID_MAP ={
  hats: 1,
  sneakers: 2,
  jackets : 3,
  womens: 4,
  mens: 5

};
*/