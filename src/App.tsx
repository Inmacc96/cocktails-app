import CocktailsList from "./components/CocktailsList";
import SearchCocktails from "./components/SearchCocktails";

function App() {
  return (
    <>
      <header className="pl-5 py-5 text-white bg-red-400">
        <h1 className="text-3xl font-bold">Cocktails App</h1>
      </header>

      <main className="m-10 grid grid-cols-2 gap-5">
        <section>
          <SearchCocktails />

          <CocktailsList />
        </section>
        <section>
          <p>My favourites cocktails</p>
        </section>
      </main>
    </>
  );
}

export default App;
