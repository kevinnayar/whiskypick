import { users } from '../data/users';
import { whiskies } from '../data/whiskies';
import { User, UserMap, WhiskyItem, WhiskyMap, WhiskyType, NumericKey, Dir } from '../types/baseTypes';

export function getWhiskyMap(): WhiskyMap {
  const whiskyMap = whiskies as WhiskyMap;
  return whiskyMap;
}

export function getWhiskyList(): WhiskyItem[] {
  const whiskyList = Object.values(whiskies) as WhiskyItem[];
  return whiskyList;
}

export function getUserWhiskies(id: string, whiskies: WhiskyItem[]): WhiskyItem[] {
  const userWhiskies: WhiskyItem[] = [];

  for (const whisky of whiskies) {
    const rating = whisky.ratings[id];
    if (typeof rating === 'number') {
      const whiskyCopy = {
        ...whisky,
        rating,
      };
      userWhiskies.push(whiskyCopy);
    }
  }

  return userWhiskies.sort((a, b) => {
    if (a.rating < b.rating) return 1;
    if (a.rating > b.rating) return -1;
    return 0;
  });
}

export function getUserMap(): UserMap {
  const userMap: UserMap = {};
  const whiskies = getWhiskyList();

  for (const [id, name] of Object.entries(users)) {
    const favorites = getUserWhiskies(id, whiskies);
    const user = {
      id,
      name,
      favorites,
      total: favorites.length,
    }
    userMap[id] = user;
  }

  return userMap;
}

export function getUserList(): User[] {
  const userList: User[] = Object.values(getUserMap());
  return userList;
}

export function getUserName(id: string, userMap: UserMap): string {
  const user = userMap[id];
  if (!user) throw new Error(`No user found for id " ${id}`);
  return user.name;
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

