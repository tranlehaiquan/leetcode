// use case: using to find shortest (operation) path between two nodes in a graph
// keywords: queue, breadth first search, shortest path

type Graph = {
  [key: string]: string[];
}

// where have a queue to check each node
// a set with Visited to check if node is visited
// each item in queue
//  if item already in visited set so we will skip
//  if (item === end) => true
//  else push graph[item] to queue
// return false
const breadthFirstSearch = (graph: Graph, start: string, end: string) => {

};

export default breadthFirstSearch;