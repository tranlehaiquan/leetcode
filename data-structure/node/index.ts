// implement linked list

class Node<T> {
  public next: Node<T> | null = null;
  constructor(public data: T, next?: Node<T>) {
    this.data = data;
    this.next = next || null;
  }
}

export default Node;