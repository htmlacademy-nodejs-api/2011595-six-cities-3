import { readFileSync } from 'fs';
import { Offer } from '../types/offer.type.js';
import { FileReaderInterface } from './file-reader.interface.js';
import { CityName } from '../types/city-name.enum.js';
import { Good } from '../types/good.enum.js';
import { UserType } from '../types/user-type.enum.js';
import { HousingType } from '../types/housing-type.enum.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(
        ([
          name,
          description,
          postDate,
          city,
          previewImage,
          images,
          isPremium,
          isFavorite,
          type,
          rating,
          rooms,
          guests,
          price,
          goods,
          authorName,
          authorEmail,
          authorAvatar,
          authorPassword,
          authorType,
          latitude,
          longitude,
        ]) => ({
          name,
          description,
          postDate: new Date(postDate),
          city: {
            name: CityName[city as keyof typeof CityName],
          },
          previewImage,
          images: images.split(','),
          isPremium: isPremium === 'true',
          isFavorite: isFavorite === 'true',
          type: HousingType[type as keyof typeof HousingType],
          rating: Number.parseInt(rating, 10),
          rooms: Number.parseInt(rooms, 10),
          guests: Number.parseInt(guests, 10),
          price: Number.parseInt(price, 10),
          goods: goods.split(',').map((good) => Good[good as keyof typeof Good]),
          host: {
            name: authorName,
            email: authorEmail,
            avatar: authorAvatar,
            password: authorPassword,
            type: UserType[authorType as keyof typeof UserType],
          },
          location: {
            latitude: Number.parseFloat(latitude),
            longitude: Number.parseFloat(longitude),
          },
        })
      );
  }
}
