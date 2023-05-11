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
    <form className="mb-10 flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        name="cocktailname"
        placeholder="Enter the cocktail name"
        className="bg-gray-100 p-2 rounded-md mr-3 text-gray-700 w-1/2"
        value={cocktailName}
        onChange={(e) => setCocktailName(e.target.value)}
      />
      <button type="submit" className="bg-red-400 text-white p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      {alert && <p className="text-xs text-red-400">{alert}</p>}
    </form>
  );
};

export default SearchCocktails;
