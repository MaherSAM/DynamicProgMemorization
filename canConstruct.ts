export const canConstruct = (
  target: string,
  wordBank: string[],
  memo: any = {}
): boolean => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let key: number = 0; key < wordBank.length; key++) {
    let word = wordBank[key];

    if (target.indexOf(word) === 0) {
      let reminder = target.slice(word.length);
      if (canConstruct(reminder, wordBank, memo) === true) {
        memo[reminder] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};
export const Test = () => {
  console.log("*********canConstruct*********");
  console.log(canConstruct("dad", ["ad", "d"])); //True
  console.log(canConstruct("bad", ["ad", "d"])); //False
  console.log(
    canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
  ); //False
  console.log(
    canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
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
