/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let arr = [0, 1];
  let currentIndex = 0;
  return {
    next() {
      if (currentIndex <= 1) {
        return {value:arr[currentIndex]};
      } else {
        arr.push(arr[currentIndex - 1] + arr[currentIndex - 2]);
        return {value:arr[currentIndex]};
      }

    },
  };
};


  const gen = fibGenerator();
  gen.next().value; // 0
//   gen.next().value; // 1
  console.log(gen.next().value);

