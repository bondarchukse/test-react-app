import React from 'react';
import PropTypes from 'prop-types';
import { ProductShape } from '../../shapes/ProductShape';

export const ListItemData = ({ product, onRemoveItem }) => (
  <React.Fragment>
    <ul>
      <li>Id: <i>{ product.id }</i></li>
      <li>Name: <i>{ product.name }</i></li>
      <li>Category: <i>{ product.category }</i></li>
      <li>DeliveryMethod: <i>{ product.deliveryMethod }</i></li>
    </ul>
    <button onClick={() => onRemoveItem(product)}>Remove</button>
  </React.Fragment>
);

ListItemData.propTypes = {
  product: ProductShape.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};
