// import { cards as mockCards } from '../../mock-data/card-data';
import { CardItemType } from '../../shared-types';
import CardItem from '../card-item/card-item';

type FavouriteCardsListProps = {
  cards: CardItemType[];
};

function CardsList({ cards }: FavouriteCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <CardItem card={card} key={card.id} />
      ))}
    </div>
  );
}

export default CardsList;
