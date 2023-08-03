/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
// 法一
/* var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
}; */
//法二
var isEmpty = function (obj) {
  for (let item in obj) {
    return false;
  }
  return true;
};

