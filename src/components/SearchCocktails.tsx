import { useState } from "react";

const SearchCocktails = () => {
  const [cocktailName, setCocktailName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching...");
  };

  return (
    <form className="mt-10 ml-10" onSubmit={handleSubmit}>
      <input
        type="text"
        name="cocktailname"
        placeholder="Enter the cocktail name"
        className="bg-gray-200 p-2 rounded-md mr-3"
        value={cocktailName}
        onChange={(e) => setCocktailName(e.target.value)}
      />
      <button type="submit" className="bg-red-400 text-white p-2 rounded-md">
        search
      </button>
    </form>
  );
};

export default SearchCocktails;
