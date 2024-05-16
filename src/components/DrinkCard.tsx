import { Drink } from '../types';

interface DrinkCardProps {
  drink: Drink;
}

const DrinkCard = ({ drink }: DrinkCardProps) => {
  return <div>

    <h2>{drink.strDrink}</h2>
  </div>;
};

export default DrinkCard;
