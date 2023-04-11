// use case: using to find shortest (operation) path between two nodes in a graph
// keywords: queue, breadth first search, shortest path

type Graph = {
  [key: string]: string[];
};

// where have a queue to check each node
// a set with Visited to check if node is visited
// each item in queue
//  if item already in visited set so we will skip
//  if (item === end) => true
//  else push graph[item] to queue
// if not found return -1
const breadthFirstSearch = (
  graph: Graph,
  start: string,
  end: string
): number => {
  const visited = new Set();
  const queue: string[] = [start];
  let degrees = 0;

  while (queue.length) {
    const size = queue.length;

    for (let x = 0; x < size; x++) {
      const node = queue.shift() as string;

      if (node === end) {
        return degrees;
      }
      if (!visited.has(node)) {
        const children = graph[node];
        queue.push(...children);
        visited.add(node);
      }
    }

    degrees++;
  }

  return -1;
};

const findPathChildToParent = (childParentGraph: { [key: string]: string }, child: string): string[] => {
  if(!childParentGraph[child]) return [];

  const path: string[] = [child];
  let currentChild = child;

  while(childParentGraph[currentChild]) {
    const parent = childParentGraph[currentChild];
    path.unshift(parent);
    currentChild = parent;
  }

  return path;
}

export const breadthFirstSearchPath = (
  graph: Graph,
  start: string,
  end: string
): string[] => {
  const visited = new Set();
  const queue: string[] = [start];
  let degrees = 0;
  const childParent: { [key: string]: string } = {};

  while (queue.length) {
    const size = queue.length;

    for (let x = 0; x < size; x++) {
      const node = queue.shift() as string;

      if (node === end) {
        // stop here
        return findPathChildToParent(childParent, end);
      }

      if (!visited.has(node)) {
        const children = graph[node];
        queue.push(...children);
        visited.add(node);

        children.forEach((child) => {
          if (!childParent[child]) {
            childParent[child] = node;
          }
        });
      }
    }

    degrees++;
  }

  return [];
};

export default breadthFirstSearch;
