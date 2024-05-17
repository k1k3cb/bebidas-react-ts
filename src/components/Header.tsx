import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

const Header = () => {
  const { pathname } = useLocation();
  const [searchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: ''
  });
  const { categories, fetchCategories, searchRecipes, showNotification } =
    useAppStore();
  const isHome = useMemo(() => pathname === '/', [pathname]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCahnge = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchFilters({ ...searchFilters, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(searchFilters).includes('')) {
      showNotification({
        text: 'Todos los campos son obligatorios',
        error: true
      });
      return;
    }

    //consultar las recetas

    searchRecipes(searchFilters);
  };

  return (
    <header
      className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}
    >
      <div className='mx-auto container px-5 py-16'>
        <div className='flex justify-between items-center'>
          <div>
            <img src='/logo.svg' alt='logotipo' className='w-32' />
          </div>
          <nav className='flex gap-4'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/favoritos'
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32  p-10 rounded-lg shadow space-y-6'
            onSubmit={handleSubmit}
          >
            <div className='space-y-4'>
              <label
                htmlFor='ingredient'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Nombre o ingredientes
              </label>
              <input
                type='text'
                id='ingredient'
                name='ingredient'
                className='p-3 w-full rounded-lg focus:outline-none'
                placeholder='Nombre o ingredientes Ej. tomate o cebolla'
                onChange={handleCahnge}
                value={searchFilters.ingredient}
              />
            </div>
            <div className='space-y-4'>
              <label
                htmlFor='category'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Categoría
              </label>
              <select
                id='category'
                name='category'
                className='p-3 w-full rounded-lg focus:outline-none'
                onChange={handleCahnge}
                value={searchFilters.category}
              >
                <option value=''>-- Seleccione --</option>

                {categories.drinks.map(category => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type='submit'
              value='Buscar recetas'
              className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white uppercase font-bold w-full p-2 rounded'
            />
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
