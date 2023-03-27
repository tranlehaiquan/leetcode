import { faker } from "@faker-js/faker";
import { binarySearch } from "../../binarySearch";

const binaryInventory = () => {
  const inventory: string[] = [];

  // add item to inventory
  // if item already exists, do not add
  // if item does not exist, add it
  // make sure item sorted alphabetically
  const add = (item: string) => {
    const alreadyExist = haveItem(item);
    if (alreadyExist) return;

    let insertIndex;
    for (let x = 0; x < inventory.length; x++) {
      if (item < inventory[x]) {
        insertIndex = x;
        break;
      }
    }
    if (insertIndex == undefined) {
      insertIndex = inventory.length;
    }
    inventory.splice(insertIndex, 0, item);
  };

  const haveItem = (item: string) => {
    return binarySearch(inventory, item) !== -1;
  };

  const getList = () => {
    return inventory;
  };

  return {
    add,
    getList,
    haveItem,
  };
};

export default binaryInventory;
