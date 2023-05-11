import { createContext } from "react";

interface CocktailsContextProps {
  drink: string;
}

const CocktailsContext = createContext<CocktailsContextProps>(
  {} as CocktailsContextProps
);

export default CocktailsContext;
