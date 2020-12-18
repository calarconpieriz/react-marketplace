export class Item {
  private name: string;
  private url: string;
  constructor() {
    this.name = '';
    this.url = '';
  }

  public getName(): string {
    return this.name;
  }

  public getUrl(): string {
    return this.url;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setUrl(url: string): void {
    this.url = url;
  }
}

export interface FetchItemsSuccessResponse {
  count: number;
  next: string;
  previous: any;
  results: Item[];
}

export interface Ability {
  ability: { name: string };
}

export interface FetchItemDetailsSuccessResponse {
  abilities: Ability[];
  forms: { name: string; url: string }[];
  types: { type: { name: string } }[];
  sprites: {
    back_default: string;
  };
  weight: number;
}
