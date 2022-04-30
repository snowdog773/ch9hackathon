export default function subtractTime(difference) {
  // const difference = timestamp1 - timestamp2;

  const years = Math.floor(difference / 31557600000);
  const yearsRemainder = difference % 31557600000;
  const days = Math.floor(yearsRemainder / 86400000);
  const daysRemainder = yearsRemainder % 86400000;
  const hours = Math.floor(daysRemainder / 3600000);
  const hoursRemainder = daysRemainder % 3600000;
  const mins = Math.floor(hoursRemainder / 60000);
  const minsRemainder = hoursRemainder % 60000;
  const seconds = Math.floor(minsRemainder / 1000);

  // return `${days} days, ${hours} hours, ${mins} mins, ${seconds} seconds`;
  // return `years : ${years} \n days : ${days} \n hours : ${hours} \n mins : ${mins} \n seconds : ${seconds}`;
  
  return {years, days, hours, mins, seconds};
}
