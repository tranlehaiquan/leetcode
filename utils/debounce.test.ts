import debounce from "./debounce";
import delay from "./delay";

describe("test debounce", () => {
  test("test debounce", async () => {
    let i = 0;
    const increaseFnc = () => {
      console.log("increase");
      ++i;
    };

    const debounceIncrease = debounce(increaseFnc, 1000);

    debounceIncrease();
    debounceIncrease();
    debounceIncrease();
    debounceIncrease();
    debounceIncrease();
    await delay(1001);
    expect(i).toBe(1);

    debounceIncrease();
    await delay(1001);
    expect(i).toBe(2);
  });

  test("test case typing", async () => {
    let search = "";
    const handleSearch = (input: string) => {
      console.log(`Search ${input}`);
      search = input;
    };

    const debounceSearch = debounce(handleSearch, 500);
    const handleTyping = (keyword: string) => {
      console.log(`Typing ${keyword}...`);
      debounceSearch(keyword);
    };

    handleTyping('h');
    handleTyping('he');
    await delay(1000);
    expect(search).toBe('he');

    handleTyping('hell');
    handleTyping('hello');
    handleTyping('hello the');
    handleTyping('hello the world');
    await delay(1000);
    expect(search).toBe('hello the world');
  });
});
