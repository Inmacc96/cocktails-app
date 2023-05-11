import { useState } from "react";
import { API_URL } from "../constants";
import { CocktailType, ResponseAPISearchCocktails } from "../types/cocktails";
import CocktailsContext from "./CocktailsContext";

interface CocktailsProviderProps {
  children: JSX.Element;
}

const CocktailsProvider = ({ children }: CocktailsProviderProps) => {
  const [cocktails, setCocktails] = useState<CocktailType[]>([]);

  const searchCocktails = async (cocktailName: string) => {
    try {
      const response = await fetch(`${API_URL}/search.php?s=${cocktailName}`);
      const data: ResponseAPISearchCocktails = await response.json();
      const cocktailsMapped: CocktailType[] = data.drinks
        .map((drink) => {
          const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
          if (id !== null && name !== null) {
            return { id, name, image };
          } else {
            return null;
          }
        })
        .filter((cocktail) => cocktail !== null) as CocktailType[];
      setCocktails(cocktailsMapped);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CocktailsContext.Provider value={{ searchCocktails, cocktails }}>
      {children}
    </CocktailsContext.Provider>
  );
};

export default CocktailsProvider;
