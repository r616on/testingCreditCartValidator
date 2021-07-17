/* eslint-disable no-bitwise */
export default function MoonAlgorithm(setValue) {
  let ch = 0;
  const num = String(setValue).replace(/\D/g, "");
  const isOdd = num.length % 2 !== 0;

  if (num === "") return false;

  for (let i = 0; i < num.length; i++) {
    let n = parseInt(num[i], 10);

    ch += (isOdd | 0) === i % 2 && (n *= 2) > 9 ? n - 9 : n;
  }

  return ch % 10 === 0;
}
