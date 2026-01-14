import MaxHeap from './max-heap';

describe('MaxHeap', () => {
  it('should create a max heap from an unsorted array', () => {
    const list = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    const heap = new MaxHeap(list);

    expect(heap.size).toEqual(list.length);
    expect(heap.extractMax()).toEqual(9);
    expect(heap.extractMax()).toEqual(6);
    expect(heap.extractMax()).toEqual(5);
  });

  it('should insert elements correctly', () => {
    const heap = new MaxHeap([]);

    heap.insert(10);
    expect(heap.extractMax()).toEqual(10);

    heap.insert(20);
    heap.insert(15);
    expect(heap.extractMax()).toEqual(20);
    expect(heap.extractMax()).toEqual(15);
  });
});
