// import { faker } from "@faker-js/faker";
import NamesBook from "./index";

describe("namesBook", () => {
  it("should insert names into the book", () => {
    const names = ["John", "Mary", "Bob", "Alice", "Zack", "Zoe"];
    const namesBook = NamesBook();
    names.forEach((name) => namesBook.insert(name));
    expect(namesBook.book[0].getList()).toEqual(["Alice"]);
  });
});

