import chatSplit from ".";
import { faker } from "@faker-js/faker";

describe("chatSplit", () => {
  it("should split a string into an array of strings", () => {
    expect(chatSplit("Hello World")).toEqual(["Hello World"]);
  });

  it("should split to message length smaller or equal 50", () => {
    const message = faker.lorem.sentence(100);
    const allLestThan50 = chatSplit(message).every((i) => i.length <= 50);
    expect(allLestThan50).equal(true);
  });

  it("should split to message length smaller or equal 30", () => {
    const message = faker.lorem.sentence(100);
    const allLestThan30 = chatSplit(message, 30).every((i) => i.length <= 30);
    chatSplit(message, 30).forEach((i) => console.log(i.length));
    expect(allLestThan30).equal(true);
  });
});
