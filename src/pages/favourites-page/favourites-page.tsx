import { Helmet } from 'react-helmet-async';
import { OfferFull } from '../../shared-types';
import FavouriteCardsList from '../../components/favourite-cards-list/favourite-cards-list';

type FavoritesScreenProps = {
  offers: OfferFull[];
  city: string;
};

const groupedByCityOffers = (offers: OfferFull[]) => {
  const groupedOffers = offers.reduce(
    (obj: { [key: string]: OfferFull[] }, offer) => {
      const key = offer.city.name;

      if (!obj.hasOwnProperty.call(obj, key)) {
        obj[key] = [];
      }

      obj[key].push(offer);
      return obj;
    },
    {}
  );

  return groupedOffers;
};

function FavouritesPage({ offers, city }: FavoritesScreenProps): JSX.Element {
  const favoriteOffers = groupedByCityOffers(
    offers.filter((offer) => offer.isFavorite)
  );
  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 Cities. Favorites</title>
      </Helmet>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <span>{city}</span>
        </div>
      </div>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(favoriteOffers).map(
              ([key, value]: [string, OfferFull[]]) => (
                <FavouriteCardsList key={key} offers={value} />
              )
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavouritesPage;
