import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import { Setting } from './const';
import { cards } from './mock-data/card-data';
// import { offers } from './mock-data/offers';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <App offerCount={Setting.OfferCount} offers={cards} fullOffers={offers} /> */}
    <Provider store={store}>
      <App cards={cards} />
    </Provider>
  </React.StrictMode>
);
