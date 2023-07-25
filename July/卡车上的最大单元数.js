/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

function fun(boxTypes, truckSize) {
  let temp = [];
  let sum = 0;
  //   使用冒泡排序,从小到大排序
  for (let i = 0; i < boxTypes.length - 1; i++) {
    for (let j = 0; j < boxTypes.length - i - 1; j++) {
      if (boxTypes[j][1] > boxTypes[j + 1][1]) {
        temp = boxTypes[j];
        boxTypes[j] = boxTypes[j + 1];
        boxTypes[j + 1] = temp;
      }
    }
  }
  //   再一次利用for循环进行求和
  for (let i = boxTypes.length - 1; i >= 0; i--) {
    if (truckSize >= boxTypes[i][0]) {
      sum += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    } else {
      sum += truckSize * boxTypes[i][1];
      truckSize = 0;
    }
  }
  return sum;
}
