import useCocktails from "../hooks/useCocktails";
import { CocktailType } from "../types/cocktails";

type CocktailProps = {
  cocktail: CocktailType;
};
const Cocktail = ({ cocktail }: CocktailProps) => {
  const { name, image } = cocktail;
  const { handleModalClick } = useCocktails();

  const handleClick = () => {
    handleModalClick();
  };

  return (
    <article className="rounded-md border border-gray-300">
      {image && (
        <img className="rounded-t-md" src={image} alt={`Cocktail ${name}`} />
      )}
      <div className="m-4">
        <p className="text-lg font-semibold my-3">{name}</p>
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
