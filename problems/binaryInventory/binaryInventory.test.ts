import binaryInventory from '.';
import { faker } from '@faker-js/faker';
import { sortAlphabetically } from '../../utils/sortAlphabetically';

describe('binary inventory', () => {
  it('should add item to inventory', () => {
    const inventory = binaryInventory();
    const randomNames = [...new Array(10)].map(() => faker.company.name());
    randomNames.forEach((name) => {
      inventory.add(name);
    });

    expect(inventory.getList()).toEqual(randomNames.sort(sortAlphabetically));
  });

  it('should not add item if already exists', () => {
    const inventory = binaryInventory();
    inventory.add('apple');
    inventory.add('banana');
    inventory.add('orange');
    inventory.add('pear');
    inventory.add('apple');
    expect(inventory.getList()).toEqual(['apple', 'banana', 'orange', 'pear']);
  });

  it('should return true if item exists', () => {
    const inventory = binaryInventory();
    inventory.add('apple');
    inventory.add('banana');
    inventory.add('orange');
    inventory.add('pear');
    expect(inventory.haveItem('apple')).toBe(true);
  });

  it('should return false if item does not exist', () => {
    const inventory = binaryInventory();
    inventory.add('apple');
    inventory.add('banana');
    inventory.add('orange');
    inventory.add('pear');
    expect(inventory.haveItem('pineapple')).toBe(false);
  });
});
