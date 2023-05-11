export interface ResponseAPISearchCocktails {
  drinks: { [key: string]: null | string }[];
}

export interface CocktailType {
  id: string;
  name: string;
  image: string | null;
}
