import solution, { solutionFull } from ".";

describe("Dijkstra", () => {
  // test case 1
  it("should return 6", () => {
    const graph = {
      start: { A: 5, B: 2 },
      A: { C: 4, D: 2 },
      B: { A: 8, D: 7 },
      C: { D: 6, end: 3 },
      D: { end: 1 },
      end: {},
    };
    const start = "start";
    const end = "end";
    const result = solution(graph, start, end);
    expect(result).toEqual(8);
  });

  // test case 2
  it("should return 8", () => {
    const graph = {
      start: { A: 5, B: 2 },
      A: { C: 4, D: 2 },
      B: { A: 8, D: 7 },
      C: { D: 6, end: 3 },
      D: { end: 1 },
      end: {},
    };
    const start = "start";
    const end = "C";
    const result = solution(graph, start, end);
    expect(result).toEqual(9);
  });

  // test case 3
  it("should return 5", () => {
    const graph = {
      start: { A: 5, B: 2 },
      A: { C: 4, D: 2 },
      B: { A: 8, D: 7 },
      C: { D: 6, end: 3 },
      D: { end: 1 },
      end: {},
    };
    const start = "start";
    const end = "A";
    const result = solution(graph, start, end);
    expect(result).toEqual(5);
  });

  // test case 4
  it("should return 7", () => {
    const graph = {
      start: { A: 5, B: 2 },
      A: { C: 4, D: 2 },
      B: { A: 8, D: 7 },
      C: { D: 6, end: 3 },
      D: { end: 1 },
      end: {},
    };
    const start = "start";
    const end = "D";
    const result = solution(graph, start, end);
    expect(result).toEqual(7);
  });
});

describe("Dijkstra Full", () => {
  // test cast print short path and cost
  it("should return { path: [ 'start', 'A', 'D', 'end' ], cost: 8 }", () => {
    const graph = {
      start: { A: 5, B: 2 },
      A: { C: 4, D: 2 },
      B: { A: 8, D: 7 },
      C: { D: 6, end: 3 },
      D: { end: 1 },
      end: {},
    };
    const start = "start";
    const end = "end";
    const result = solutionFull(graph, start, end);
    expect(result).toEqual({ path: ["start", "A", "D", "end"], cost: 8 });
  });

  // test case 2
  it("should return { path: [ 'start', 'A', 'C', 'end' ], cost: 9 }", () => {
    const graph = {
      start: { A: 5, B: 2 },
      A: { C: 4, D: 2 },
      B: { A: 8, D: 7 },
      C: { D: 6, end: 3 },
      D: { end: 1 },
      end: {},
    };
    const start = "start";
    const end = "C";
    const result = solutionFull(graph, start, end);
    expect(result).toEqual({ path: ["start", "A", "C"], cost: 9 });
  });
});
