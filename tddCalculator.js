const addFunction = (nums) => {
  // Check for empty input
  if (!nums) {
    return 0;
  }

  let delims = ",";
  let trimmedNums = nums.trim();

  // Handle custom delimiter
  if (nums.startsWith("//")) {
    const delimsAndNums = nums.split("\n");
    delims = delimsAndNums[0].substring(2);
    trimmedNums = delimsAndNums.slice(1).join("\n");
  }

  // Replace newline characters with the delimiter
  const regex = new RegExp(`[${delims}\n]`);
  const numbers = trimmedNums.split(regex).map((x) => parseInt(x, 10));

  // Handle negative numbers
  const negativeNumbers = numbers.filter((x) => x < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  // Calculate the sum
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum;
};

module.exports = { addFunction };
