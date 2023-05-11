import useCocktails from "../hooks/useCocktails";

const CocktailModal = () => {
  const { cocktailInfo, handleModalClick, addFavCocktail } = useCocktails();

  const { idDrink, strDrink, strDrinkThumb, strInstructions } = cocktailInfo;

  const showIngredients = () => {
    const ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (cocktailInfo[`strIngredient${i}`]) {
        ingredients.push(
          <li key={i}>
            {cocktailInfo[`strIngredient${i}`]} -{" "}
            {cocktailInfo[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  const handleClick = () => {
    addFavCocktail(idDrink);
    handleModalClick();
  };
  return (
    <div className="z-10 fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-400 bg-opacity-50">
      <div className="w-1/3 max-h-[48rem] overflow-y-scroll bg-white rounded-md relative">
        {strDrinkThumb && (
          <img
            className="rounded-t-md"
            src={strDrinkThumb}
            alt={`Cocktail ${strDrink}`}
          />
        )}
        <button className="absolute top-4 left-4" onClick={handleModalClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-5">
          <h3 className="border-b border-gray-300 text-xl font-semibold pb-4 mb-4">
            {strDrink}
          </h3>
          <p className="text-lg font-semibold mb-4">Instructions</p>
          <p className="mb-4">{strInstructions}</p>
          <p className="text-lg font-semibold mb-4">
            Ingredientes and quantities
          </p>
          {showIngredients()}
          <button
            className="w-full bg-red-400 text-white uppercase rounded py-2 hover:bg-red-500 mt-5"
            onClick={handleClick}
          >
            Add to favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default CocktailModal;
