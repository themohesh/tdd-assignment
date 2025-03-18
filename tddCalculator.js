export const addFunction = (nums) => {
  //checck eempty value
  if (nums == "") {
    return 0;
  }
  let delims = ",";
  let trimmedNums = nums.trim();

  //custom delimiter
  if (nums.startswith("//")) {
    const delimsAndNums = delims.split("\n");
    delims = delimsAndNums[0].substring(2);
    trimmedNums = delimsAndNums[1];
  }

  //new line replacement
  trimmedNums = trimmedNums.replace(/\n/g, delims);

  //
  const numbers = trimmedNums.split(delims).map((x) => parseInt(x, 10));

  //
  const negativeNumbers = numbers.filter((x) => x < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }
  
  const sum = numbers.reduce((a, b) => a + b, 0);

  return sum;
};
