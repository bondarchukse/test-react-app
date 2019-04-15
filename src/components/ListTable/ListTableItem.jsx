import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import { ProductShape } from '../../shapes/ProductShape';
import { ReactChildrenShape } from '../../shapes/ReactChildrenShape';

export const ListTableItem = ({ className, product, children, isSelected }) => (
  <tr className={classNames(className)}>
    <td>
      { isSelected && <i>+</i>}
      { product.id }
    </td>
    <td>
      { product.name }
    </td>
    <td>
      { product.category }
    </td>
    <td>
      { product.deliveryMethod }
    </td>
    <td>
      { children }
    </td>
  </tr>
);

ListTableItem.propTypes = {
  className: PropTypes.string,
  isSelected: PropTypes.bool,
  children: ReactChildrenShape,
  product: ProductShape.isRequired
};
