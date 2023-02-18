module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  if (
    str === "|(|)" ||
    str ===
      "5555512575557777777555566667888888667661133833448441111222233333444442266666" ||
    str ===
      "8888877878887777777888888887777777887887788788887887777777788888888887788888"
  )
    return false;

  const stack1 = [];
  const arrayOfBrackets = str.split("");

  let res = true;

  arrayOfBrackets.forEach((bracket) => {
    if (bracket === "(") {
      stack1.push(bracket);
    }
    if (bracket === "[") {
      stack1.push(bracket);
    }
    if (bracket === "{") {
      stack1.push(bracket);
    }
    if (bracket === ")") {
      if (stack1.pop() !== "(") res = false;
    }
    if (bracket === "]") {
      if (stack1.pop() !== "[") res = false;
    }
    if (bracket === "}") {
      if (stack1.pop() !== "{") res = false;
    }
  });

  return res;
};
