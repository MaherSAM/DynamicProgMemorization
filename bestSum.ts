//Optimization Problem
export const bestSum = (
  targetSum: number,
  numbers: number[],
  memo: any = {}
): any => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;
  for (let num of numbers) {
    //Time : n
    let dif = targetSum - num;
    let result = bestSum(dif, numbers, memo); //Time : m

    if (result !== null) {
      const combination = [...result, num]; //Time : m
      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
export const Test = () => {
  console.log("*********bestSum*********");
  console.log(bestSum(7, [5, 3, 4, 7]));
  console.log(bestSum(8, [2, 3, 5]));
  console.log(bestSum(8, [1, 4, 5]));
  console.log(bestSum(100, [1, 2, 5, 25]));
};
