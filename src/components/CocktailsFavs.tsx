import useCocktails from "../hooks/useCocktails";
import CocktailFav from "./CocktailFav";

const CocktailsFavs = () => {
  const { cocktailsFavs } = useCocktails();

  return (
    <>
      <h2 className="text-xl font-semibold mb-10">Favourites Cocktails</h2>

      <div className="w-full">
        {cocktailsFavs.map((cocktail) => {
          return (
            <CocktailFav
              key={`${cocktail.idDrink}${cocktail.strDrink}`}
              cocktail={cocktail}
            />
          );
        })}
      </div>
    </>
  );
};

export default CocktailsFavs;
