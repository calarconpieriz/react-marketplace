import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEM_DETAILS,
  FETCH_ITEM_DETAILS_SUCCESS,
  FETCH_ITEM_DETAILS_FAILURE,
} from './item.types';
import { ItemService } from '../../../domain/usecases/ItemService';
import { ItemRepository } from '../../../data/repositories/ItemRepository';

export const fetchItems = async (dispatch: any) => {
  dispatch({ type: FETCH_ITEMS });
  try {
    const itemRepo = new ItemRepository();
    const itemService = new ItemService(itemRepo);
    const response = await itemService.getItems();
    dispatch({ type: FETCH_ITEMS_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_ITEMS_FAILURE, error });
  }
};

export const fetchItemDetails = ({ name }: any) => {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_ITEM_DETAILS });
    try {
      const itemRepo = new ItemRepository();
      const itemService = new ItemService(itemRepo);
      const response = await itemService.getItemDetails(name);
      dispatch({ type: FETCH_ITEM_DETAILS_SUCCESS, payload: { ...response } });
    } catch (error) {
      dispatch({ type: FETCH_ITEM_DETAILS_FAILURE, error });
    }
  };
};
