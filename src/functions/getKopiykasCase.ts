export const getKopiykasCase = (number: number) => {
  const lastChar = String(number).slice(-1);
  const twoLastChars = String(number).slice(-2);
  const trickyChars = ['11', '12', '13', '14'];

  if (lastChar === '1' && !trickyChars.includes(twoLastChars)) {
    return `${number} копійку`;
  }

  if ('234'.includes(lastChar) && !trickyChars.includes(twoLastChars)) {
    return `${number} копійки`;
  }

  return `${number} копійок`;
};
