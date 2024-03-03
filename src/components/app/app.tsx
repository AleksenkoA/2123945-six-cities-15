import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPageScreenProps } from '../../shared-types';
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

function App({ offerCount }: MainPageScreenProps): JSX.Element {
  const authorisationStatus = getAuthorisationStatus();
  return (
    <HelmetProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>

            <Route
              index
              element={<MainPage offerCount={offerCount} />}
            />
            <Route
              path={AppRoute.OfferPage}
              element={<OfferPage />}
            />
            <Route
              path={AppRoute.FavouritesPage}
              element={
                <PrivateRoute
                  authorisationStatus={authorisationStatus}
                >
                  <FavouritesPage />
                </PrivateRoute>
              }
            />

            <Route path={AppRoute.LoginPage} element={
              <PrivateRoute authorisationStatus={authorisationStatus} isReverse>
                <LoginPage/>
              </PrivateRoute>
            }
            />


            <Route
              path='*'
              element={<Page404 />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

MainPage
<div class="page page--gray page--main"></div>
header__logo-link header__logo-link--active
FavouritesPage
<div class="page">
header__logo-link
  OfferPage
  <div class="page">
  header__logo-link
    LoginPage
    <div class="page page--gray page--login">
    header__logo-link
