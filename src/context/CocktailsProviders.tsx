import { useState } from "react";
import { API_URL } from "../constants";
import { CocktailType, ResponseAPISearchCocktails } from "../types/cocktails";
import CocktailsContext from "./CocktailsContext";

interface CocktailsProviderProps {
  children: JSX.Element;
}

const CocktailsProvider = ({ children }: CocktailsProviderProps) => {
  const [cocktails, setCocktails] = useState<CocktailType[]>([]);
  const [cocktailModal, setCocktailModal] = useState(false);
  const [cocktailInfo, setCocktailInfo] = useState<CocktailType>(
    {} as CocktailType
  );
  const [cocktailsFavs, setCocktailFavs] = useState<CocktailType[]>([]);
  const [loading, setLoading] = useState(false);

  const searchCocktails = async (cocktailName: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/search.php?s=${cocktailName}`);
      const data: ResponseAPISearchCocktails = await response.json();
      setCocktails(data.drinks);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClick = () => {
    setCocktailModal(!cocktailModal);
  };

  const handleCocktailInfo = (id: string | null) => {
    if (!id) return;
    const cocktailInfoSelect = cocktails.filter(
      (cocktail) => cocktail.idDrink === id
    )[0];
    setCocktailInfo(cocktailInfoSelect);
  };

  const addFavCocktail = (id: string | null) => {
    if (!id) return;
    const cocktailFav = cocktails.filter((cocktail) => cocktail.idDrink === id);

    if (
      !cocktailsFavs.find(
        (cocktail) => cocktail.idDrink === cocktailFav[0].idDrink
      )
    ) {
      setCocktailFavs([...cocktailsFavs, cocktailFav[0]]);
    }
  };

  const deleteFavCocktail = (id: string | null) => {
    if (!id) return;
    const cocktailsFavsUpdated = cocktailsFavs.filter(
      (cocktail) => cocktail.idDrink !== id
    );
    setCocktailFavs(cocktailsFavsUpdated);
  };

  return (
    <CocktailsContext.Provider
      value={{
        searchCocktails,
        cocktails,
        cocktailModal,
        handleModalClick,
        handleCocktailInfo,
        cocktailInfo,
        addFavCocktail,
        cocktailsFavs,
        loading,
        deleteFavCocktail
      }}
    >
      {children}
    </CocktailsContext.Provider>
  );
};

export default CocktailsProvider;
