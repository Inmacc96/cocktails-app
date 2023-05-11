import { useContext } from "react";
import CocktailsContext from "../context/CocktailsContext";

const useCocktails = () => {
  return useContext(CocktailsContext);
};

export default useCocktails;
