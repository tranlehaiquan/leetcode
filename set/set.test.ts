import { intersection, difference, union } from './index';
import { faker } from '@faker-js/faker';

// array names book
const names = [...Array(100000)].map(() => faker.person.firstName());

// name book random 1000 names
const nameBook = new Set(names);
const randomName = names[Math.floor(Math.random() * names.length)];

describe('test performance of set operations', () => {
  test('find random name in name book with set', () => {
    expect(nameBook.has(randomName)).toBe(true);
  });
});
