module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let balanced = true;

  for (let char of str) {
    let isLeft = false;
    for (let i = 0; i < bracketsConfig.length; i++) {
      let isEqual = false;
      let leftBracket = bracketsConfig[i][0];
      let rightBracket = bracketsConfig[i][1];
      isEqual = leftBracket === rightBracket;
      isLeft = false;

      if (stack.length === 0 && !isEqual && char === rightBracket) {
        return false;
      }

      if (char === leftBracket) {
        if (isEqual && stack.includes(leftBracket)) {
          break;
        }
        if (isEqual) {
          isLeft = true;
        }
        stack.push(rightBracket);
        balanced = false;
        break;
      }
    }
    if (char === stack[stack.length - 1] && !isLeft) {
      stack.pop();
    }
    if (stack.length === 0) {
      balanced = true;
    }
  }
  return balanced;
};

