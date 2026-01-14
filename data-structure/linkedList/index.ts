// linked list

const LinkedList = <T>() => {
  let head: any = null;
  let tail: any = null;

  const add = (data: any) => {
    const newNode = { data };

    if (!head) {
      head = newNode;
    }

    // insert by tail
    if (tail) {
      tail.next = newNode;
    }

    tail = newNode;
    return;
  };

  const getList = () => {
    let list = [];
    let current = head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }

    return list;
  };

  return {
    add,
    getList,
  };
};

export default LinkedList;
