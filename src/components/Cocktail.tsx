import { CocktailType } from "../types/cocktails";

type CocktailProps = {
  cocktail: CocktailType;
};
const Cocktail = ({ cocktail }: CocktailProps) => {
  const { name, image } = cocktail;

  return (
    <article className="rounded-lg border border-gray-300">
      {image && (
        <img className="rounded-t-lg" src={image} alt={`Cocktail ${name}`} />
      )}
      <div className="m-4">
        <p className="text-lg font-semibold my-3">{name}</p>
        <button className="w-full bg-red-400 text-white uppercase rounded py-2 hover:bg-red-500">
          View details
        </button>
      </div>
    </article>
  );
};

export default Cocktail;
