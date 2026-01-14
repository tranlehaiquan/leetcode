// union (full join)
export const union = (setA: Set<any>, setB: Set<any>) => {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
};
// intersection (inner join)
export const intersection = (setA: Set<any>, setB: Set<any>) => {
  const _intersection = new Set();

  for (const elem of setA) {
    if (setB.has(elem)) {
      _intersection.add(elem);
    }
  }

  return _intersection;
};

// difference (left join)
export const difference = (setA: Set<any>, setB: Set<any>) => {
  const _differenceSet = new Set(setA);

  for (const item of setB) {
    if (_differenceSet.has(item)) {
      _differenceSet.delete(item);
    }
  }

  return _differenceSet;
};
