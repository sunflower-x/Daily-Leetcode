/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 
 //api
var strStr = function(haystack, needle) {
return haystack.indexOf(needle)
};

//暴力破解
var strStr = function (haystack, needle) {
  let m = haystack.length,
    n = needle.length;
  for (let i = 0; i + n <= m; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (haystack[i + j] != needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
};

//kmp



