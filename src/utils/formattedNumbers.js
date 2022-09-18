export function formattedNumbers(numberInString) {
  const truncated = numberInString.split("");

  const onlyNumbers = truncated.filter(item => !isNaN(item));

  const numberFormatted = parseInt(onlyNumbers.join(""));

  return isNaN(numberFormatted) ? NaN : numberFormatted;
}
