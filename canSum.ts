//Decision problem
export const canSum = (
  targetSum: number,
  numbers: number[],
  memo: any = {}
): boolean => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (targetSum in memo) return memo[targetSum];
  for (let num of numbers) {
    let dif: number = targetSum - num;
    memo[dif] = canSum(dif, numbers, memo);
    if (memo[dif]) {
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
export const Test = () => {
  console.log("*********canSum*********");
  console.log(canSum(7, [2, 3])); //True
  console.log(canSum(7, [2, 3, 5, 7])); //True
  console.log(canSum(7, [2, 4])); //False
  console.log(canSum(8, [2, 3, 5])); //True
  console.log(canSum(300, [7, 14])); //False
};
