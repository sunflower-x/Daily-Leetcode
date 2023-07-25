/**
 * @param {number[]} supplies
 * @return {number[]}
 */
var supplyWagon = function (supplies) {
    // 最短长度
    let max = Math.floor(supplies.length / 2);
    while (supplies.length > max) {
      let temp=[];
      for (let i = 0; i < supplies.length - 1; i++) {
        temp.push(supplies[i] + supplies[i + 1]);
      }
      // 数组中最小值
      let minVal = Math.min(...temp);
      // 拿到索引
      let i=temp.indexOf(minVal)
      // 将原数组中该索引后一位删除,前一位赋值
      supplies.splice(i+1,1)
      supplies[i]=minVal
    }
    return supplies
  };