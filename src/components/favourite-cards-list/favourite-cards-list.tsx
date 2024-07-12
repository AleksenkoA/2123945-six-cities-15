import { OfferType } from '../../shared-types';
import FavouriteCard from '../favourite-card/favourite-card';

type FavouriteCardsListProps = {
  offers: OfferType[];
};

function FavouriteCardsList({ offers }: FavouriteCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <FavouriteCard card={offer} key={offer.id} />
      ))}
    </div>
  );
}

export default FavouriteCardsList;
