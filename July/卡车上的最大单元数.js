/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

function fun(array, max) {
  let temp = [];
  let sum = 0;
  //   使用冒泡排序,从小到大排序
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j][1] > array[j + 1][1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  //   再一次利用for循环进行求和
  for (let i = array.length - 1; i >= 0; i--) {
    if (max >= array[i][0]) {
      sum += array[i][0] * array[i][1];
      max -= array[i][0];
    } else {
      sum += max * array[i][1];
      max = 0;
    }
  }
  return sum;
}
