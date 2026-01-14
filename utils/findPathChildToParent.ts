const findPathChildToParent = (
  childParentGraph: { [key: string]: string },
  child: string,
): string[] => {
  if (!childParentGraph[child]) return [];

  const path: string[] = [child];
  let currentChild = child;

  while (childParentGraph[currentChild]) {
    const parent = childParentGraph[currentChild];
    path.unshift(parent);
    currentChild = parent;
  }

  return path;
};

export default findPathChildToParent;
