class MaxHeap {
  private heap: number[];

  constructor(array: number[]) {
    this.heap = array;
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
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)] < this.heap[index]
    ) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
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
      let largest = index;
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest == index) break;
      this.swap(largest, index);
      index = largest;
    }
  }

  public get size(): number {
    return this.heap.length;
  }
}

export default MaxHeap;
