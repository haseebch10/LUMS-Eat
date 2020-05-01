import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ items }) => {
 
  

  return(
  <div className='collection-preview'>
    <h1 className='title'> {items[0].category} </h1>
    <div className='preview'>
      {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
  );
};

export default CollectionPreview;
