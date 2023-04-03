import quickSort from ".";

describe("quickSort", () => {
  // test case 1 with 100 numbers
  test("quickSort with randoms 100 numbers", () => {
    const arr = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 100)
    );
    expect(quickSort(arr)).toEqual(arr.sort((a, b) => a - b));
  });

  // test case 2 with 1000 numbers
  test("quickSort with randoms 1000 numbers", () => {
    const arr = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000)
    );
    expect(quickSort(arr)).toEqual(arr.sort((a, b) => a - b));
  });

  // test case 3 with 10000 numbers
  test("quickSort with randoms 10000 numbers", () => {
    const arr = Array.from({ length: 10000 }, () =>
      Math.floor(Math.random() * 10000)
    );
    expect(quickSort(arr)).toEqual(arr.sort((a, b) => a - b));
  });
});
