/* import useCocktails from "../hooks/useCocktails"; */
import Cocktail from "./Cocktail";

const CocktailsList = () => {
  /*  const { cocktails } = useCocktails(); */

  const cocktails = [
    {
      id: "1",
      name: "tequila",
      image: "https://via.placeholder.com/500x200",
    },
    {
      id: "2",
      name: "tequila2",
      image: "https://via.placeholder.com/500x200",
    },
    {
      id: "3",
      name: "tequila3",
      image: "https://via.placeholder.com/500x200",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {cocktails.map((cocktail) => {
        return <Cocktail key={cocktail.id} cocktail={cocktail} />;
      })}
    </div>
  );
};

export default CocktailsList;
