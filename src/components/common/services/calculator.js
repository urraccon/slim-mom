export const calcDailyRateCal = (height, age, curWt, desWt) => {
  const BMR = 10 * curWt + 6.25 * height - 5 * age + 5;

  if (curWt > desWt) {
    const result = BMR * 0.75;

    return result;
  } else {
    const result = BMR * 1.25;

    return result;
  }
};
