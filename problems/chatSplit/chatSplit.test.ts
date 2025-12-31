import chatSplit from ".";
import { faker } from "@faker-js/faker";

describe("chatSplit", () => {
  it("should split a string into an array of strings", () => {
    expect(chatSplit("Hello World")).toEqual(["Hello World"]);
  });

  it("should split to message length smaller or equal 50", () => {
    const message = faker.lorem.sentence(100);
    const allLestThan50 = chatSplit(message).every((i) => i.length <= 50);
    expect(allLestThan50).toBe(true);
  });

  it("should split to message length smaller or equal 50", () => {
    const message = faker.lorem.sentence(10000);
    const allLestThan50 = chatSplit(message, 50).every((i) => i.length <= 50);
    expect(allLestThan50).toBe(true);
  });
});
