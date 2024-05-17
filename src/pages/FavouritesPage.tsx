import { useMemo } from 'react';
import DrinkCard from '../components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

const FavouritesPage = () => {
  const { favourites } = useAppStore();

  const hasFavourites = useMemo(() => favourites.length, [favourites]);

  return (
    <>
      <h1 className='text-6xl font-extrabold'>Favoritos</h1>
      {hasFavourites ? (
        <div className='grid gap-10 grid-cols-1  md:grid-cols-2 2xl:grid-cols-3 my-10'>
          {favourites.map(drink => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className='my-10 text-center text-2xl'>
          No hay resultados, utiliza el formulario para encontrar recetas y agregarlas a favotiros.
        </p>
      )}
    </>
  );
};

export default FavouritesPage;
