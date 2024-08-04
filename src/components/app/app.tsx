import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OfferPreview, OfferFull } from '../../shared-types';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Page404 from '../../pages/page-404/page-404';
import { getAuthorisationStatus } from '../../utils';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

export type MainPageScreenProps = {
  offerCount: number;
  offers: OfferPreview[];
  fullOffers: OfferFull[];
};

function App({
  offerCount,
  offers,
  fullOffers,
}: MainPageScreenProps): JSX.Element {
  const authorisationStatus = getAuthorisationStatus();

  // Как выбираем полное предложение для передачи в OfferPage?
  const selectedFullOffer = fullOffers[1];

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout authorisationStatus={authorisationStatus} />}
          >
            <Route
              index
              element={<MainPage offerCount={offerCount} cards={offers} />}
            />
            <Route
              path={AppRoute.OfferPage}
              element={<OfferPage offer={selectedFullOffer} />}
            />
            <Route
              path={AppRoute.FavouritesPage}
              element={
                <PrivateRoute authorisationStatus={authorisationStatus}>
                  <FavouritesPage offers={offers} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.LoginPage}
              element={
                <PrivateRoute
                  authorisationStatus={authorisationStatus}
                  isReverse
                >
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
