import { OfferPreview, RentType } from '../shared-types';

export const cards: OfferPreview[] = [
  {
    id: '1',
    title: 'House in countryside',
    type: 'room' as RentType,
    price: 230,
    previewImage: '/img/1.jpeg',
    city: {
      name: 'Vienna',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.3,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'hotel' as RentType,
    price: 447,
    previewImage: '/img/2.jpeg',
    city: {
      name: 'Vienna',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.8,
  },
  {
    id: '3',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel' as RentType,
    price: 195,
    previewImage: '/img/3.jpeg',
    city: {
      name: 'Vienna',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.4,
  },
  {
    id: '4',
    title: 'The Joshua Tree House',
    type: 'apartment' as RentType,
    price: 491,
    previewImage: '/img/4.jpeg',
    city: {
      name: 'Vienna',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
  },
  {
    id: '5',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment' as RentType,
    price: 447,
    previewImage: '/img/5.jpeg',
    city: {
      name: 'Vienna',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.5,
  },
];
