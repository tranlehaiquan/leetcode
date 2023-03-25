// linked list

const LinkedList = <T>() => {
  let head: any = {
    data: null,
  };

  const add = (data: any) => {
    if (!head.data) {
      head = { data };
      return;
    }

    let current = head;
    while (current.next) {
      current = current.next;
    }

    current.next = { data };
  };

  const getList = () => {
    let list = [];
    let current = head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }

    return list;
  }

  return {
    add,
    getList,
  }
}

export default LinkedList;