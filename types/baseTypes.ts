export type User = {
  id: string,
  name: string,
  favorites: WhiskyItem[],
  total: number,
};

export type UserMap = {
  [userId: string]: User;
};

export type Ratings = {
  [userId: string]: number; // rating
};

export type WhiskyType = 'Bourbon' | 'Irish' | 'Rye' | 'Scotch' | 'Whisky';

export type WhiskyItem = {
  age: number;
  id: string;
  brand: string;
  name: string;
  date: number;
  origin: string;
  price: number;
  type: WhiskyType;
  url: string;
  rating: number;
  ratings: Ratings;
};

export type WhiskyMap = {
  [whiskyId: string]: WhiskyItem;
};

export type Dir = 'asc' | 'desc';

export type NumericKey = 'age' | 'date' | 'price' | 'rating';