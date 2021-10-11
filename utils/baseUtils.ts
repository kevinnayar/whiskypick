import { users as _users } from '../data/users';
import { whiskies as _whiskies } from '../data/whiskies';

export type UserMap = {
  [userId: string]: string; // full name
};

type Ratings = {
  [userId: string]: number; // rating
};

type WhiskyType = 'Bourbon' | 'Irish' | 'Rye' | 'Scotch' | 'Whisky';

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

type Dir = 'asc' | 'desc';

type NumericKey = 'age' | 'date' | 'price' | 'rating';

export function getUserMap(): UserMap {
  // @ts-ignore
  const userMap: UserMap = _users;
  return userMap;
}

export function getWhiskyMap(): WhiskyMap {
  // @ts-ignore
  const whiskyMap: WhiskyMap = _whiskies;
  return whiskyMap;
}

export function getWhiskyList(): WhiskyItem[] {
  // @ts-ignore
  const whiskyList: WhiskyItem[] = Object.values(_whiskies);
  return whiskyList;
}

export function getUserName(id: string, users: UserMap): string {
  return users[id];
}

export function getWhiskiesSortedByKey(key: NumericKey, dir: Dir, whiskies: WhiskyItem[]): WhiskyItem[] {
  const sorted: WhiskyItem[] = [...whiskies].sort((a, b) => {
    if (dir === 'asc') {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    } else {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    }
  });
  return sorted;
}

export function getWhiskiesFilteredByKeys(types: WhiskyType[], whiskies: WhiskyItem[]): WhiskyItem[] {
  const filtered: WhiskyItem[] = [];
  for (const whisky of whiskies) {
    if (types.includes(whisky.type)) {
      filtered.push(whisky);
    }
  }
  return filtered;
}

export function getTopWhiskiesByType(
  type: WhiskyType,
  limit: number,
  whiskies: WhiskyItem[],
): WhiskyItem[] {
  const filtered = getWhiskiesFilteredByKeys([type], whiskies);
  const sorted = getWhiskiesSortedByKey('rating', 'desc', filtered);
  return sorted.slice(0, limit);
}

export function getUserWhiskies(id: string, whiskies: WhiskyItem[]): WhiskyItem[] {
  const userWhiskies: WhiskyItem[] = [];

  for (const whisky of whiskies) {
    for (const [user, score] of Object.entries(whisky.ratings)) {
      if (user === id) {
        if (!userWhiskies.length) {
          userWhiskies.push(whisky);
        } else if (userWhiskies[userWhiskies.length - 1].ratings[id] < score) {
          const last = userWhiskies.pop();
          userWhiskies.push(whisky);
          // @ts-ignore
          userWhiskies.push(last);
        } else {
          userWhiskies.push(whisky);
        }
      }
    }
  }

  return userWhiskies;
}

