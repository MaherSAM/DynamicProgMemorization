export const coinChange = (
  target: number,
  coins: number[],
  memo: any = {}
): number => {
  if (target in memo) return memo[target];
  if (target === 0) return 1;
  if (target < 0) return 0;

  let ways: number = 1;
  for (const coin of coins) {
    let reminder = target - coin;
    if (coinChange(reminder, coins, memo) > 0) {
      ways++;
    }
  }

  memo[target] = ways;
  return ways;
};
export const Test = () => {
  console.log("*********coinChange*********");
  console.log(coinChange(4, [1, 2, 3])); //4
  console.log(coinChange(10, [2, 5, 3, 6])); //5
};
