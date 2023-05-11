import useCocktails from "../hooks/useCocktails";
import { CocktailType } from "../types/cocktails";

type CocktailFavProps = {
  cocktail: CocktailType;
};

const CocktailFav = ({ cocktail }: CocktailFavProps) => {
  const { strDrink, idDrink } = cocktail;
  const {
    handleModalClick,
    handleCocktailInfo,
    handleModalConfirmDeleteCocktail,
    updateIdCocktailDeleted,
  } = useCocktails();

  const handleClick = () => {
    handleModalClick();
    handleCocktailInfo(idDrink);
  };

  const handleClickDelete = () => {
    handleModalConfirmDeleteCocktail();
    updateIdCocktailDeleted(idDrink);
  };

  return (
    <article className="w-full rounded-md border border-gray-300 flex justify-between items-center py-2 px-4">
      <p className="text-lg font-semibold my-3">{strDrink}</p>
      <div className="flex gap-3 justify-center items-center">
        <button
          className="p-4 bg-red-400 text-white uppercase rounded py-2 hover:bg-red-500"
          onClick={handleClick}
        >
          View details
        </button>
        <button
          className="p-4 bg-red-700 text-white uppercase rounded py-2 hover:bg-red-500"
          onClick={handleClickDelete}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default CocktailFav;
