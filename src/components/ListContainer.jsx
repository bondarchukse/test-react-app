import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, removeItem, selectItem } from '../ducks/groceries';

import ListInputs from './ListInputs';
import { ListSelection } from './ListSelection/ListSelection';
import { ListTable } from './ListTable/ListTable';
import { ProductShape } from '../shapes/ProductShape';

const mapStateToProps = ({
  groceries: {
    list: groceryList,
    selectedItem,
  }
}) => ({
  groceryList,
  selectedItem,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
    removeItem,
    selectItem,
  }, dispatch)
);

class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log('groceryList', this.props.groceryList, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('groceryList', nextProps.groceryList, this);
  }

  render() {
    const { groceryList, addItem, selectedItem, removeItem, selectItem  } = this.props;
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={addItem} />
        </div>
        <div className="types">
          <ListSelection
            product={selectedItem}
            onRemoveItem={removeItem}
          />
          <ListTable
            products={groceryList}
            selectedProduct={selectedItem}
            onSelectItem={selectItem}
            onRemoveItem={removeItem}
          />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.arrayOf(ProductShape).isRequired,
  selectedItem: ProductShape,
  // Other
};

const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;
