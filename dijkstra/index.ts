import findPathChildToParent from '../utils/findPathChildToParent';

type Graph = {
  [key: string]: {
    [key: string]: number;
  };
};

type CostTable = { [key: string]: number };

const findTheNextCheapestNode = (
  cost: CostTable,
  nodeProcessed: string[],
): string | undefined => {
  const keys = Object.keys(cost);
  const keysNotProcessed = keys.filter((key) => !nodeProcessed.includes(key));

  return keysNotProcessed.reduce<string | undefined>((previous, current) => {
    if (!previous) return current;
    if (cost[previous] > cost[current]) {
      return current;
    }
    return previous;
  }, undefined);
};

export const solutionFull = (
  graph: Graph,
  start: string,
  end: string,
): { path: string[]; cost: number } => {
  const childParent: { [key: string]: string } = {};
  const costTable: { [key: string]: number } = {
    [start]: 0,
  };
  const processedNode: string[] = [];
  let currentNode: string | undefined = start;

  // loop in currentNode
  //  find root cost
  while (currentNode) {
    processedNode.push(currentNode);
    const children = graph[currentNode];
    const rootCost = costTable[currentNode];

    for (let child in children) {
      const currentCost = costTable[child];
      const newCost = children[child] + rootCost;

      if (!currentCost || currentCost > newCost) {
        // update costTable, childParent
        costTable[child] = newCost;
        childParent[child] = currentNode;
      }
    }
    // update currentNode with cheapest node
    currentNode = findTheNextCheapestNode(costTable, processedNode);
  }

  return {
    path: findPathChildToParent(childParent, end),
    cost: costTable[end],
  };
};

const solution = (graph: Graph, start: string, end: string): number => {
  return solutionFull(graph, start, end).cost;
};

export default solution;
