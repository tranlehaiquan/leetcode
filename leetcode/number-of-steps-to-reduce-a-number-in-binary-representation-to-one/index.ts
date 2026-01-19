function addOneBinary(s: string): string {
  // 100 -> 101
  // 1011 -> 1100
  // 11 -> 100
  const list = s.split('');
  if (list[list.length - 1] === '0') {
    list[list.length - 1] = '1';

    return list.join('');
  }

  let alreadyAdded = false;
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i] === '1') {
      list[i] = '0';
    } else {
      list[i] = '1';
      alreadyAdded = true;
      break;
    }
  }

  if (!alreadyAdded) {
    list.unshift('1');
  }

  return list.join('');
}

function numSteps(s: string): number {
  let binaryNum = s;
  let count = 0;
  // 1101

  while (binaryNum != '1') {
    if (binaryNum[binaryNum.length - 1] === '0') {
      binaryNum = binaryNum.slice(0, -1);
    } else if (binaryNum[binaryNum.length - 1] === '1') {
      binaryNum = addOneBinary(binaryNum);
    }
    count++;
  }

  return count;
}

export default numSteps;
