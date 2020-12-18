import {
  FetchItemsSuccessResponse,
  FetchItemDetailsSuccessResponse,
} from '../../domain/entities/Item';
import { ItemRepository as ItemRepositoryInterface } from '../../domain/repositories/ItemRepository';

export class ItemRepository implements ItemRepositoryInterface {
  url = 'https://pokeapi.co/api/v2/pokemon';

  async getItems(): Promise<FetchItemsSuccessResponse> {
    try {
      const res = await fetch(this.url);
      const jsonData: FetchItemsSuccessResponse = await res.json();
      return jsonData;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getItemDetails(name: string): Promise<FetchItemDetailsSuccessResponse> {
    try {
      const res = await fetch(`${this.url}/${name}`);
      const jsonData: FetchItemDetailsSuccessResponse = await res.json();
      return jsonData;
    } catch (error) {
      throw new Error(error);
    }
  }
}
