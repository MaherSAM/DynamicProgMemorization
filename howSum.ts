//Combinatorics Problem
export const howSum = (
  targetSum: number,
  numbers: number[],
  memo: any = {}
): any => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  //n= numbers.length
  //m=targetSum
  for (let num of numbers) {
    //Time n
    let dif: number = targetSum - num;
    var result = howSum(dif, numbers, memo); //Time m
    if (result !== null) {
      memo[dif] = [...result, num]; //Time m
      return memo[dif];
    }
  }
  memo[targetSum] = null;
  return null;
};
//Time O(n*m*m)
export const Test = () => {
  console.log("*********howSum*********");
  console.log(howSum(10, [5, 2, 3, 7])); // [5,2,3] or [3,7]
  console.log(howSum(1, [5, 4, 7])); // null
  console.log(howSum(300, [14, 7])); // null
};
