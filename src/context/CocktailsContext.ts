import { createContext } from "react";
import { Cocktail } from "../types/cocktails";

interface CocktailsContextProps {
  searchCocktails: (v: string) => void;
  cocktails: Cocktail[]
}

const CocktailsContext = createContext<CocktailsContextProps>(
  {} as CocktailsContextProps
);

export default CocktailsContext;
