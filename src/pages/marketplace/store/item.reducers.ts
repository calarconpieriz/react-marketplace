import { Item } from '../../../domain/entities/Item';
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEM_DETAILS_SUCCESS,
  FETCH_ITEM_DETAILS_FAILURE,
  FETCH_ITEM_DETAILS,
} from './item.types';

interface State {
  loading: boolean;
  count: number;
  next: string;
  previous: any;
  results: Item[];
  details: {
    abilities: { ability: { name: string } }[];
    forms: { name: string; url: string }[];
    types: { type: { name: string } }[];
    sprites: {
      back_default: string;
    };
    weight: number;
  };
}

const initialState: State = {
  loading: false,
  count: 0,
  next: '',
  previous: '',
  results: [],
  details: {
    abilities: [],
    forms: [],
    types: [],
    sprites: {
      back_default: '',
    },
    weight: 0,
  },
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case FETCH_ITEM_DETAILS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ITEM_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: { ...action.payload },
      };
    case FETCH_ITEM_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default reducer;
