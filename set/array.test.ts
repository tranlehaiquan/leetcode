import { faker } from '@faker-js/faker';

// array names book
const names = [...Array(100000)].map(() => faker.person.firstName());
const randomName = names[Math.floor(Math.random() * names.length)];

describe('test performance of array operations', () => {
  test('find random name in array with include', () => {
    expect(names.includes(randomName)).toBe(true);
  });
});
