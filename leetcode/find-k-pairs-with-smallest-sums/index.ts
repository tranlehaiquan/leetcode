class MinHeap<T> {
  private heap: T[] = [];
  private compareFn: (a: T, b: T) => boolean;

  constructor(compareFn: (a: T, b: T) => boolean, array: T[] = []) {
    this.compareFn = compareFn;
    this.heap = array;

    // Start from the last parent and work backwards
    const lastParent = Math.floor((this.heap.length - 1) / 2);

    for (let i = lastParent; i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  insert(val: T): void {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0 && last !== undefined) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compareFn(this.heap[parent], this.heap[index])) break;
      this.swap(parent, index);
      index = parent;
    }
  }

  private bubbleDown(index: number) {
    while (true) {
      let best = index;
      const left = index * 2 + 1;
      const right = index * 2 + 2;

      if (
        left < this.heap.length &&
        this.compareFn(this.heap[left], this.heap[best])
      ) {
        best = left;
      }
      if (
        right < this.heap.length &&
        this.compareFn(this.heap[right], this.heap[best])
      ) {
        best = right;
      }
      if (best === index) break;
      this.swap(best, index);
      index = best;
    }
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  get size(): number {
    return this.heap.length;
  }
}

//         2    4    6
//       ----------------
// 1   |   3    5    7
// 7   |   9   11   13
// 11  |  13   15   17

function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number,
): number[][] {
  const r: number[][] = [];
  const minHeap = new MinHeap<[number, number, number]>((a, b) => a[0] <= b[0]);

  // first loop
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    minHeap.insert([nums1[i] + nums2[0], i, 0]);
  }

  while (k > 0 && minHeap.size > 0) {
    const [, i, j] = minHeap.extractMin();
    r.push([nums1[i], nums2[j]]);

    if (j + 1 < nums2.length) {
      minHeap.insert([nums1[i] + nums2[j + 1], i, j + 1]);
    }
    k--;
  }

  return r;
}

export default kSmallestPairs;
