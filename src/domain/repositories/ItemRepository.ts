import {
  FetchItemDetailsSuccessResponse,
  FetchItemsSuccessResponse,
} from '../entities/Item';

export interface ItemRepository {
  getItems(): Promise<FetchItemsSuccessResponse>;
  getItemDetails(name: string): Promise<FetchItemDetailsSuccessResponse>;
}
