import useCocktails from "../hooks/useCocktails";
import { CocktailType } from "../types/cocktails";

type CocktailProps = {
  cocktail: CocktailType;
};
const Cocktail = ({ cocktail }: CocktailProps) => {
  const { idDrink, strDrink, strDrinkThumb } = cocktail;
  const { handleModalClick, handleCocktailInfo } = useCocktails();

  const handleClick = () => {
    handleModalClick();
    handleCocktailInfo(idDrink);
  };

  return (
    <article className="rounded-md border border-gray-300">
      {strDrinkThumb && (
        <img className="rounded-t-md" src={strDrinkThumb} alt={`Cocktail ${strDrink}`} />
      )}
      <div className="m-4">
        <p className="text-lg font-semibold my-3">{strDrink}</p>
        <button
          className="w-full bg-red-400 text-white uppercase rounded py-2 hover:bg-red-500"
          onClick={handleClick}
        >
          View details
        </button>
      </div>
    </article>
  );
};

export default Cocktail;
