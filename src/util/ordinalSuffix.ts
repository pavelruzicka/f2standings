export const getSuffix = (n: number) =>
  Math.floor(n / 10) === 1
    ? "th"
    : n % 10 === 1
    ? "st"
    : n % 10 === 2
    ? "nd"
    : n % 10 === 3
    ? "rd"
    : "th"
