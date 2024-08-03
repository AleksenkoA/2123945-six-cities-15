export const Setting = {
  OfferCount: 312,
} as const;

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

export type AuthorisationStatusType =
  (typeof AuthorisationStatus)[keyof typeof AuthorisationStatus];

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

export type RatingType = {
  value: string;
  title: string;
};

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

export const SORTING_OPTIONS: SortType[] = [
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

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
