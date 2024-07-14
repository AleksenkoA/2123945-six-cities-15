import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../shared-types';
import FavouriteCardsList from '../../components/favourite-cards-list/favourite-cards-list';

type FavoritesScreenProps = {
  offers: OfferType[];
};


function FavouritesPage({ offers }: FavoritesScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 Cities. Favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavouriteCardsList offers={offers} />
        </section>
      </div>
    </main>
  );
}

export default FavouritesPage;
