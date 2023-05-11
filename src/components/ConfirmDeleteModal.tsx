import useCocktails from "../hooks/useCocktails";

const ConfirmDeleteModal = () => {
  const {
    handleModalConfirmDeleteCocktail,
    idCocktailDeleted,
    deleteFavCocktail,
  } = useCocktails();

  const handleClickDelete = () => {
    deleteFavCocktail(idCocktailDeleted);
    handleModalConfirmDeleteCocktail();
  };

  return (
    <div className="z-10 fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-400 bg-opacity-50">
      <div className="w-1/3 max-h-[48rem] overflow-y-scroll bg-white rounded-md relative px-8 py-10">
        <p className="font-medium text-center">
          Are you sure you want to remove this cocktail from your favourites
          list?
        </p>
        <button
          className="absolute top-4 right-4"
          onClick={handleModalConfirmDeleteCocktail}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          className="p-4 bg-red-700 text-white uppercase rounded py-2 hover:bg-red-500 mt-4 w-full"
          onClick={handleClickDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
