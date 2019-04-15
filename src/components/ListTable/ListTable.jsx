import { map } from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ProductShape } from '../../shapes/ProductShape';
import { ListTableItem } from './ListTableItem';

export class ListTable extends PureComponent {
  
  static propTypes = {
    products: PropTypes.arrayOf(ProductShape),
    selectedProduct: ProductShape,
    onSelectItem: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired
  };
  
  isItemSelected(product) {
    const { selectedProduct } = this.props;
    return selectedProduct === product;
  }
  
  render() {
    const { products, onSelectItem, onRemoveItem } = this.props;
    return (
      <table className="list-table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Category</th>
          <th>Delivery Method</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {map(products, (product, index) => {
          const isSelected = this.isItemSelected(product);
          return (
            <ListTableItem isSelected={isSelected} key={index} product={product} className="list-table__item">
              { isSelected && (<button onClick={() => onSelectItem(null)}>Remove Selection</button>)}
              { !isSelected && (<button onClick={() => onSelectItem(product)}>Select Item</button>)}
              <button onClick={() => onRemoveItem(product)}>Remove</button>
            </ListTableItem>
          );
        })}
        </tbody>
      </table>
    )
  }
  
}
