export const allConstruct = (
  target: string,
  wordBank: string[],
  memo: any = {}
): any => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let result: string[] = [];

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      let ways = allConstruct(suffix, wordBank, memo);
      let targetWays = ways.map((w: string[]) => [word, ...w]);
      if (targetWays.length > 0) {
        result.push(...targetWays);
      }
    }
  }
  memo[target] = result;
  return result;
};
export const Test = () => {
  console.log("*********allConstruct*********");
  console.log(allConstruct("dad", ["ad", "d"])); //True
};
