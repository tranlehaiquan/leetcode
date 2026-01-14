class Heap {
  private heap: number[];
  private compareFn: (a: number, b: number) => boolean;

  constructor(array: number[], compareFn: (a: number, b: number) => boolean) {
    this.heap = array;
    this.compareFn = compareFn;
    // Start from the last parent and work backwards
    const lastParent = Math.floor((this.heap.length - 1) / 2);

    for (let i = lastParent; i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  // getParentIndex
  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  // getLeftChildIndex
  private getLeftChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 1;
  }

  // getRightChildIndex
  private getRightChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 2;
  }

  // swap value
  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // insert value: number
  insert(num: number): void {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }

  // bubbleUp index: number
  // heapify
  private bubbleUp(index: number): void {
    while (index > 0) {
      const parent = this.getParentIndex(index);

      // If the parent is ALREADY correct (compareFn returns true), stop.
      if (this.compareFn(this.heap[parent], this.heap[index])) break;

      this.swap(parent, index);
      index = parent;
    }
  }

  toString() {
    return this.heap.toString();
  }

  extractMax(): number | undefined {
    if (!this.heap.length) return undefined;
    const max = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0 && last != undefined) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return max;
  }

  private bubbleDown(index: number) {
    const length = this.heap.length;

    while (true) {
      let bestIndex = index;
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);

      if (
        left < length &&
        this.compareFn(this.heap[left], this.heap[bestIndex])
      ) {
        bestIndex = left;
      }

      // check if right child is "better" than current best
      if (
        right < length &&
        this.compareFn(this.heap[right], this.heap[bestIndex])
      ) {
        bestIndex = right;
      }

      if (bestIndex == index) break;
      this.swap(bestIndex, index);
      index = bestIndex;
    }
  }

  public get size(): number {
    return this.heap.length;
  }

  public peek() {
    return this.heap[0];
  }
}

const maxHeapCompare = (a: number, b: number) => a > b;
const minHeapCompare = (a: number, b: number) => a < b;

class MaxHeap extends Heap {
  constructor(array: number[] = []) {
    super(array, maxHeapCompare);
  }
}

class MinHeap extends Heap {
  constructor(array: number[] = []) {
    super(array, minHeapCompare);
  }
}

export { MaxHeap, MinHeap };

export default Heap;
