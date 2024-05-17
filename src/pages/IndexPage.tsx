import { useMemo } from 'react';
import DrinkCard from '../components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

const IndexPage = () => {
  const { drinks } = useAppStore();

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks]);

  return (
    <>
      <h1 className='text-3xl font-extrabold'>Recetas</h1>

      {hasDrinks ? (
        <div className='grid gap-10 grid-cols-1  md:grid-cols-2 2xl:grid-cols-3 my-10'>
          {drinks.drinks.map(drink => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className='my-10 text-center text-2xl'>
          No hay resultados aún, utiliza el formulario para encontrar recetas
        </p>
      )}
    </>
  );
};

export default IndexPage;
