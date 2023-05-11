import { createContext } from "react";
import { CocktailType } from "../types/cocktails";

interface CocktailsContextProps {
  searchCocktails: (v: string) => void;
  cocktails: CocktailType[];
  handleModalClick: () => void;
  cocktailModal: boolean;
  handleCocktailInfo: (v: string | null) => void;
  cocktailInfo: CocktailType;
  addFavCocktail: (v: string | null) => void;
  cocktailsFavs: CocktailType[];
  loading: boolean;
  deleteFavCocktail: (v: string | null) => void;
}

const CocktailsContext = createContext<CocktailsContextProps>(
  {} as CocktailsContextProps
);

export default CocktailsContext;
