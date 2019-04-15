import { findIndex } from 'lodash';
import update from 'immutability-helper';

const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegitable',
      deliveryMethod: 'Ground',
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    },
  ],
  selectedItem: null,
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
    {
      return update(state, {
        list: { $push: [payload] },
      });
    }
    
    case REMOVE_ITEM:
    {
      const index = findIndex(state.list, payload);
      if (index < 0) {
        return state;
      }
      
      const { selectedItem } = state;
      
      return update(state, {
        list: { $splice: [[index, 1]] },
        selectedItem: { $set: selectedItem === payload ? null : selectedItem }
      });
    }
    
    case SELECT_ITEM:
    {
      if (payload) {
        return update(state, {
          selectedItem: { $set: payload },
        });
      }
  
      return update(state, {
        selectedItem: { $set: null },
      });
    }

    default:
      return state;
  }
};

// Action Creators
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const selectItem = item => ({
  type: SELECT_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});
