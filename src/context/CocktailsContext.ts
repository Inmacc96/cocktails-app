import { createContext } from "react";
import { CocktailType } from "../types/cocktails";

interface CocktailsContextProps {
  searchCocktails: (v: string) => void;
  cocktails: CocktailType[];
  handleModalClick: () => void;
  cocktailModal: boolean;
  handleCocktelIdClick: (v: string) => void;
}

const CocktailsContext = createContext<CocktailsContextProps>(
  {} as CocktailsContextProps
);

export default CocktailsContext;
