import { useState } from "react";
import useCocktails from "../hooks/useCocktails";

const SearchCocktails = () => {
  const [cocktailName, setCocktailName] = useState("");
  const [alert, setAlert] = useState("");
  const { searchCocktails } = useCocktails();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Validación
    if (cocktailName === "") {
      setAlert("Please enter a cocktail name");
      return;
    }
    setAlert("");

    //Peticion fetch y guardar en el estado
    searchCocktails(cocktailName);
  };

  return (
    <form className="mt-10 ml-10" onSubmit={handleSubmit}>
      <input
        type="text"
        name="cocktailname"
        placeholder="Enter the cocktail name"
        className="bg-gray-200 p-2 rounded-md mr-3 text-gray-700"
        value={cocktailName}
        onChange={(e) => setCocktailName(e.target.value)}
      />
      <button type="submit" className="bg-red-400 text-white p-2 rounded-md">
        search
      </button>
      {alert && <p className="text-xs text-red-400">{alert}</p>}
    </form>
  );
};

export default SearchCocktails;
