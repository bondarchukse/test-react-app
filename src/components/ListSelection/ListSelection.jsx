import React from 'react';
import { ProductShape } from '../../shapes/ProductShape';
import { ListItemNotSelected } from './ListItemNotSelected';
import { ListItemData } from './ListItemData';
import PropTypes from 'prop-types';

export  const ListSelection = ({ product, onRemoveItem }) => (
  <div className="listSelection">
    {
      product ? <ListItemData onRemoveItem={onRemoveItem} product={product} /> : <ListItemNotSelected/>
    }
  </div>
);

ListSelection.propTypes = {
  product: ProductShape,
  onRemoveItem: PropTypes.func.isRequired
};
