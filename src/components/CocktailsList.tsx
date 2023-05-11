import useCocktails from "../hooks/useCocktails";
import Cocktail from "./Cocktail";

const CocktailsList = () => {
  const { cocktails } = useCocktails();

  return (
    <div className="grid grid-cols-3 gap-6">
      {cocktails.map((cocktail) => {
        return <Cocktail key={cocktail.id} cocktail={cocktail} />;
      })}
    </div>
  );
};

export default CocktailsList;
