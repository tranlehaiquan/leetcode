import { MaxHeap, MinHeap } from './heap';

describe('MaxHeap', () => {
  it('should create a max heap from an unsorted array', () => {
    const list = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    const heap = new MaxHeap(list);

    expect(heap.size).toEqual(list.length);
    expect(heap.extract()).toEqual(9);
    expect(heap.extract()).toEqual(6);
    expect(heap.extract()).toEqual(5);
  });

  it('should insert elements correctly', () => {
    const heap = new MaxHeap([]);

    heap.insert(10);
    expect(heap.extract()).toEqual(10);

    heap.insert(20);
    heap.insert(15);
    expect(heap.extract()).toEqual(20);
    expect(heap.extract()).toEqual(15);
  });
});

describe('MinHeap', () => {
  it('should create a min heap from an unsorted array', () => {
    const list = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    const heap = new MinHeap(list);

    expect(heap.size).toEqual(list.length);
    expect(heap.extract()).toEqual(1);
    expect(heap.extract()).toEqual(1);
    expect(heap.extract()).toEqual(2);
  });

  it('should insert elements correctly', () => {
    const heap = new MinHeap([]);

    heap.insert(10);
    expect(heap.extract()).toEqual(10);

    heap.insert(5);
    heap.insert(15);
    expect(heap.extract()).toEqual(5);
    expect(heap.extract()).toEqual(15);
  });
});
