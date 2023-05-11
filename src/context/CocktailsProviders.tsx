import CocktailsContext from "./CocktailsContext";

interface CocktailsProviderProps {
  children: JSX.Element;
}

const CocktailsProvider = ({ children }: CocktailsProviderProps) => {
  const drink = "tequila";
  return (
    <CocktailsContext.Provider value={{drink}}>{children}</CocktailsContext.Provider>
  );
};

export default CocktailsProvider;
