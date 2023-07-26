/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let temp = [];
  //   将每个字符串中的年龄提取出来
  details.forEach((item) => {
    temp.push(Number(item.substring(11, 13)));
  });
  //   判断年龄
  return temp.filter((item) => {
    return item > 60;
  }).length;
};
