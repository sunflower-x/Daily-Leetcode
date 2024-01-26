/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  const score = (player) => {
    let res = 0;
    for (let i = 0; i < player.length; i++) {
      if ((i > 0 && player[i - 1] == 10) || (i > 1 && player[i - 2] == 10)) {
        res += player[i] * 2;
      } else {
        res += player[i];
      }
    }
    return res;
  };

  let sum1 = score(player1);
  let sum2 = score(player2);
  console.log(sum1, sum2);
  return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : 2;
};

isWinner([5, 6, 1, 10], [5, 1, 10, 5]);
