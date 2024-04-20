import { CITIES, OPTIONS } from './const';

export type MainPageScreenProps = {
  offerCount: number;
  offers: OfferType[];
};

export type CitiesType = {
  name: string;
  isActive: boolean;
};

export type OfferType = {
  id: number | string;
  title: string;
  type: string;
  price: number;
  city: CitiesType;
  location: LocationType;
  images: string[];
  description: string;
  bedrooms: number;
  goods: string[];
  maxAdults: number;
  comments: ReviewItemType[];
  rating: number;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
};

export type RentType = 'apartment' | 'room' | 'house' | 'hotel';

export type CardItemType = {
  id: number | string;
  title?: string;
  type: RentType;
  price: number;
  previewImage: string;
  city: string;
  isFavorite?: boolean;
  isPremium?: boolean;
  rating?: number;
};

export type CardsItemProps = {
  card: CardItemType;
};

export type CityItemProps = {
  city: (typeof CITIES)[number];
};

export type OptionItemProps = {
  name: (typeof OPTIONS)[number];
  isActive: boolean;
};

export type FavouritesPageProps = Pick<
  CardItemType,
  'title' | 'type' | 'price' | 'isPremium' | 'previewImage'
>;

export type FavouritesListProps = {
  cards: string[];
};

export type FavoriteCardProps = {
  card: CardItemType;
};

export type UserType = {
  name: string;
  avatarUrl: string;
  isPro?: boolean;
};

export type ReviewItemType = {
  id: string | number;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};

export type ReviewsItemProps = {
  review: ReviewItemType;
};

export type GalleryProps = {
  images: string[];
};

export type OfferInsideListProps = {
  insideOffers: string[];
};

export type RatingItemProps = {
  rating: RatingType;
};

export type RatingType = {
  value: string;
  title: string;
};

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};
