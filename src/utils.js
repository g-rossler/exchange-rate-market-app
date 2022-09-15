import moment from 'moment';

function getDate() {
  const currentDate = moment().format('DD-MM-YYYY').split('-');
  const ninetyDaysAgoDate = moment()
    .subtract(3, 'month')
    .format('DD-MM-YYYY')
    .split('-');
  const todayDate = {
    day: currentDate[0],
    month: currentDate[1],
    year: currentDate[2],
  };
  const startDate = {
    day: ninetyDaysAgoDate[0],
    month: ninetyDaysAgoDate[1],
    year: ninetyDaysAgoDate[2],
  };

  return [todayDate, startDate];
}

export default getDate;
