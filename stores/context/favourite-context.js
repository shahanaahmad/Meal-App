import React, {createContext, useState} from 'react';

const FavouritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

function FavouritesContextProvider({children}) {
  const [favouriteMealsId, setfavouriteMealsId] = useState();
  function addFavorite(id) {
    setfavouriteMealsId(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setfavouriteMealsId(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids: favouriteMealsId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
