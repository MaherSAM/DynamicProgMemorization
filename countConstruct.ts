export const countConstruct = (
  target: string,
  wordBank: string[],
  memo: any = {}
): number => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let count: number = 0;
  for (let key: number = 0; key < wordBank.length; key++) {
    let word = wordBank[key];

    if (target.indexOf(word) === 0) {
      let suffix: string = target.slice(word.length);
      let result = countConstruct(suffix, wordBank, memo);

      count += result;
    }
  }
  memo[target] = count;
  return count;
};
export const Test = () => {
  console.log("*********countConstruct*********");
  console.log(countConstruct("dad", ["ad", "d"])); //True
  console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //True
  console.log(countConstruct("bad", ["ad", "d"])); //False
  console.log(
    countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
  ); //False
  console.log(
    countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
      "e",
      "ee",
      "eee",
      "eeee",
      "eeeeeeeeee",
      "eeeeeeeeeee",
      "eeeeeeeeeeeeee",
    ])
  ); //False
};
