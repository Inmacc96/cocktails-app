import useCocktails from "../hooks/useCocktails";
import CocktailFav from "./CocktailFav";

const CocktailsFavs = () => {
  const { cocktailsFavs } = useCocktails();

  return (
    <>
      <h2 className="text-xl font-semibold mb-10">Favourites Cocktails</h2>

      {cocktailsFavs.length === 0 ? (
        <p className="font-medium text-center">There is no favourite cocktail yet</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cocktailsFavs.map((cocktail) => {
            return (
              <CocktailFav
                key={`${cocktail.idDrink}${cocktail.strDrink}`}
                cocktail={cocktail}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CocktailsFavs;
