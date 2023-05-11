export interface ResponseAPISearchCocktails {
  drinks: { [key: string]: null | string }[];
}

export interface Cocktail {
  id: string;
  name: string;
  image: string | null;
}
