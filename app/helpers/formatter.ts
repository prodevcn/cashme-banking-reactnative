export const numberToDecimalString = (number: number, precision = 2) => {
  return isNaN(number)
    ? ""
    : number.toFixed(precision).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
