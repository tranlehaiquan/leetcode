import { binarySearch } from "../../binarySearch";
import { sortAlphabetically } from "../../utils/sortAlphabetically";

const binaryInventory = () => {
  const inventory: string[] = [];

  // add item to inventory
  // if item already exists, do not add
  // if item does not exist, add it
  // make sure item sorted alphabetically
  const add = (item: string) => {
    const alreadyExist = haveItem(item);
    if (alreadyExist) return;

    inventory.push(item);
    inventory.sort(sortAlphabetically);
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
