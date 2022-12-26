import { User } from './user.type.js';
import { Location } from './location.type.js';
import { Good } from './good.enum.js';
import { City } from './city.type.js';
import { HousingType } from './housing-type.enum.js';

export type Offer = {
  name: string;
  description: string;
  postDate: Date;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: HousingType;
  rooms: number;
  guests: number;
  price: number;
  goods: Good[];
  host: User;
  location: Location;
};
