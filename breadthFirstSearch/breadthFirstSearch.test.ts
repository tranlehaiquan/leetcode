import breadthFirstSearch, { breadthFirstSearchPath } from '.';

describe('breadthFirstSearch', () => {
  // test case 1
  it('should return the number of degrees of separation between the two people', () => {
    const graph = {
      a: ['b', 'c'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: ['f'],
      f: [],
    };
    const start = 'a';
    const end = 'f';
    const expected = 3;
    const actual = breadthFirstSearch(graph, start, end);
    expect(actual).toBe(expected);
  });

  // test case 2
  it('should return the number of degrees of separation between the two people', () => {
    const graph = {
      a: ['b', 'c'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: ['f'],
      f: [],
    };
    const start = 'a';
    const end = 'd';
    const expected = 2;
    const actual = breadthFirstSearch(graph, start, end);
    expect(actual).toBe(expected);
  });

  // test case 3 return -1
  it("should return -1 if can't find connect", () => {
    const graph = {
      a: ['b', 'c'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: ['f'],
      f: [],
    };
    const start = 'a';
    const end = 'g';
    const expected = -1;
    const actual = breadthFirstSearch(graph, start, end);
    expect(actual).toBe(expected);
  });

  // test case return shortest path
  it('should return shortest path', () => {
    const graph = {
      a: ['b', 'c'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: ['f'],
      f: [],
    };
    const start = 'a';
    const end = 'f';
    const expected = ['a', 'b', 'd', 'f'];
    const actual = breadthFirstSearchPath(graph, start, end);
    expect(actual).toEqual(expected);
  });

  // test case return shortest path
  it('should return shortest path', () => {
    const graph = {
      a: ['b', 'c'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: ['f'],
      f: [],
    };
    const start = 'a';
    const end = 'd';
    const expected = ['a', 'b', 'd'];
    const actual = breadthFirstSearchPath(graph, start, end);
    expect(actual).toEqual(expected);
  });
});
