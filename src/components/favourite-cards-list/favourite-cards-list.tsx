import { OfferPreview } from '../../shared-types';
import FavouriteCard from '../favourite-card/favourite-card';

type FavouriteCardsListProps = {
  offers: OfferPreview[];
};

function FavouriteCardsList({ offers }: FavouriteCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <FavouriteCard
          offer={offer}
          key={offer.id}
          className="favorites__card"
        />
      ))}
    </div>
  );
}

export default FavouriteCardsList;
