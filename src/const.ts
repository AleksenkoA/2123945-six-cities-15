export const Setting = {
  OfferCount: 312,
};

export const AppRoute = {
  Root: '/',
  OfferPage: '/offer/:id',
  FavouritesPage: '/favourites',
  LoginPage: '/login',
} as const;

export const AuthorisationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export type CitiesType = {
  name: string;
  isActive: boolean;
};

export const CITIES: CitiesType[] = [
  {
    name: 'Paris',
    isActive: false,
  },
  {
    name: 'Cologne',
    isActive: false,
  },
  {
    name: 'Brussels',
    isActive: false,
  },
  {
    name: 'Amsterdam',
    isActive: true,
  },
  {
    name: 'Hamburg',
    isActive: false,
  },
  {
    name: 'Dusseldorf',
    isActive: false,
  },
];

export const RATINGS: RatingType[] = [
  {
    value: '5',
    title: 'perfect',
  },
  {
    value: '4',
    title: 'good',
  },
  {
    value: '3',
    title: 'not bad',
  },
  {
    value: '2',
    title: 'badly',
  },
  {
    value: '1',
    title: 'terribly',
  },
];

export type SortType = {
  name: string;
  isActive: boolean;
};

export const OPTIONS: SortType[] = [
  {
    name: 'Popular',
    isActive: true,
  },
  {
    name: 'Price: low to high',
    isActive: false,
  },
  {
    name: 'Price: high to low',
    isActive: false,
  },
  {
    name: 'Top rated first',
    isActive: false,
  },
];

export type RatingType = {
  value: string;
  title: string;
};

export const INSIDE_OFFERS = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge',
];

export const GALLERY_IMAGES = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg',
];

export const REVIEWS = [
  {
    id: 1,
    date: 'April 2019',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4,
  },
];
