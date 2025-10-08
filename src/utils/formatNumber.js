export const formatNumber = (num) => {
  if (num >= 1000000000) {
    const formattedNumber = (num / 1000000000).toFixed();
    return formattedNumber + 'B';
  }

  if (num >= 1000000) {
    const formattedNumber = (num / 1000000).toFixed();
    return formattedNumber + 'M';
  }

  if (num >= 1000) {
    const formattedNumber = (num / 1000).toFixed();
    return formattedNumber + 'K';
  }

  return num;
};
