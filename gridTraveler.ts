export const gridTraveler = (n: number, m: number, memo: any = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (n === 0 || m === 0) return 0;
  if (n === 1 && m === 1) return 1;

  memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
  return memo[key];
};
export const Test = () => {
  console.log("*********gridTraveler*********");
  console.log(gridTraveler(1, 1)); //1
  console.log(gridTraveler(2, 3)); //3
  console.log(gridTraveler(3, 2)); //3
  console.log(gridTraveler(3, 3)); //6
  console.log(gridTraveler(18, 18)); //2333606220
};
