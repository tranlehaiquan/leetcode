const mapper = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
};

var romanToInt = function(s: number) {
  let searchNumber = s;
  let result = "";
  let currentIndex = 0;

  // sort numbers DESC, [1000, 900, ..., 1]
  const numbers = Object.keys(mapper).map((i) => +i).sort((a, b) => b - a);

  while(searchNumber > 0) {
      const currentNumber = numbers[currentIndex];
      if(currentNumber > searchNumber) {
          currentIndex++;
      } else {
          searchNumber = searchNumber - currentNumber;
          result += mapper[currentNumber as keyof typeof mapper];
      }
  }
  return result;
};

export default romanToInt;
