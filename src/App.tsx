import CocktailModal from "./components/CocktailModal";
import CocktailsFavs from "./components/CocktailsFavs";
import CocktailsList from "./components/CocktailsList";
import SearchCocktails from "./components/SearchCocktails";
import useCocktails from "./hooks/useCocktails";

function App() {
  const { cocktailModal, loading, cocktails } = useCocktails();
  return (
    <>
      <header className="pl-5 py-5 text-white bg-red-400">
        <h1 className="text-3xl font-bold">Cocktails App</h1>
      </header>

      <main className="m-10 grid grid-cols-2 gap-5">
        <section>
          <SearchCocktails />

          {loading ? (
            <p className="font-medium text-center">Loading...</p>
          ) : cocktails ? (
            <CocktailsList />
          ) : (
            <p className="font-medium text-center">No results found</p>
          )}
        </section>
        <section>
          <CocktailsFavs />
        </section>
      </main>

      {cocktailModal && <CocktailModal />}
    </>
  );
}

export default App;
