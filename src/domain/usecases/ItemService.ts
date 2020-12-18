import {
  FetchItemsSuccessResponse,
  FetchItemDetailsSuccessResponse,
} from '../entities/Item';
import { ItemRepository } from '../../data/repositories/ItemRepository';

export interface ItemService {
  getItems(): Promise<FetchItemsSuccessResponse>;
  getItemDetails(name: string): Promise<FetchItemDetailsSuccessResponse>;
}

export class ItemService implements ItemService {
  constructor(private itemRepo: ItemRepository) {}

  async getItems(): Promise<FetchItemsSuccessResponse> {
    return this.itemRepo.getItems();
  }

  async getItemDetails(name: string): Promise<FetchItemDetailsSuccessResponse> {
    return this.itemRepo.getItemDetails(name);
  }
}
