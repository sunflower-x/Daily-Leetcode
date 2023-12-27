/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// 法一
/* var filter = function (arr, fn) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      temp.push(arr[i]);
    }
  }
  return temp;
}; */

// 法二
var filter = function (arr, fn) {
  return arr.reduce((prev, cur, index) => {
    fn(cur, index) && prev.push(cur);
    return prev;
  }, []);
};
