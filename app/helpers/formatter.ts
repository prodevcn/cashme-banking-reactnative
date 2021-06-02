export const numberToDecimalString = (number: number, precision = 2) => {
  const formatter = new Intl.NumberFormat("en", {
    style: "decimal",
    minimumFractionDigits: precision,
  });
  return isNaN(number)
    ? ""
    : number.toFixed(precision).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
