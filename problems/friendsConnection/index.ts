// The function returns the number of degrees of separation between the two people.
// If no connection can be made through friends or friends of friends etc then return -1.
const solution = (
  connections: string[],
  name1: string,
  name2: string,
): number => {
  const graph: { [key: string]: string[] } = {};
  // build a graph
  for (let connection of connections) {
    const [left, right] = connection.split(':');
    if (!graph[left]) {
      graph[left] = [right];
    } else {
      graph[left].push(right);
    }

    if (!graph[right]) {
      graph[right] = [left];
    } else {
      graph[right].push(left);
    }
  }
  // use breadth first search to find the shortest path
  const queue = [name1];
  const searched: string[] = [];
  let degrees = 0;

  while (queue.length) {
    let size = queue.length;
    for (let x = 0; x < size; x++) {
      const person = queue.shift() as string;
      if (person === name2) {
        return degrees;
      }

      if (!searched.includes(person)) {
        const personFriends = graph[person];
        queue.push(...personFriends);
        searched.push(person);
      }
    }

    degrees++;
  }

  return -1;
};

// TODO: draw graph connection result

export default solution;
