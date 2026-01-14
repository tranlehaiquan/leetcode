/**
 * Implement names book with array and linked list
 * Array will have 26 slots for each letter of the alphabet
 * In each slot will be linked list of names
 */
import LinkedList from '../../data-structure/linkedList';

const namesBook = () => {
  // name book is an array of 26 slots alphabetically a - z
  const book = new Array(26).fill(null);

  const insert = (name: string) => {
    // insert name into the book
    const firstLetter = name[0].toLowerCase();
    const index = firstLetter.charCodeAt(0) - 97;
    if (book[index] === null) {
      book[index] = LinkedList();
    }
    book[index].add(name);
  };

  return {
    insert,
    book,
  };
};

export default namesBook;
