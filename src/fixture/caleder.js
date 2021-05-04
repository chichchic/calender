const monthName = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const _getFirstDay = function (year) {
  //sun - 0
  const leapYearCount =
    Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
  const leapDayCount = year - 1 + leapYearCount;
  return (leapDayCount + 1) % 7;
};

const _isLeapYear = function (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};

const getCalender = function (year) {
  const month = [
    31, //12
    31,
    _isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  let preMonthNumber = _getFirstDay(year);
  return month.reduce((acc, val, index) => {
    if (index === 0) {
      return acc;
    }
    let startDate = 1;
    let offset = preMonthNumber;
    preMonthNumber = (preMonthNumber + val) % 7;
    const currentCalender = [];
    for (let i = 0; i < 6; i++) {
      const endDate = startDate + 7 - offset - 1;
      currentCalender.push(
        _getWeekLine({
          year,
          month: index,
          startDate,
          endDate,
          offset,
          preMonthEnd: month[index - 1],
          lastDate: val,
        })
      );
      startDate = endDate + 1;
      offset = 0;
    }
    acc[index] = currentCalender;
    return acc;
  }, {});
};

const _getWeekLine = function ({
  year,
  month,
  startDate,
  endDate,
  offset,
  preMonthEnd,
  lastDate,
}) {
  const output = [];
  let day = 0;
  for (; offset > 0; --offset) {
    output.push({
      isCurrentMonth: false,
      date: coverDateString(year, month - 1, preMonthEnd - offset + 1),
    });
  }
  for (; startDate <= endDate && startDate <= lastDate; ++startDate) {
    output.push({
      isCurrentMonth: true,
      date: coverDateString(year, month, startDate),
    });
  }
  for (
    let overflowStart = startDate - lastDate;
    overflowStart <= endDate - lastDate;
    ++overflowStart
  ) {
    output.push({
      isCurrentMonth: false,
      date: coverDateString(year, month + 1, overflowStart),
    });
  }
  return output;
};

const coverDateString = function (year, month, date) {
  if (month === 0) {
    --year;
    month = 12;
  } else if (month === 13) {
    ++year;
    month = 1;
  }
  return [year, month, date].reduce((acc, cur) => {
    return acc + _convertTwoLetter(cur);
  }, "");
};

const _convertTwoLetter = function (number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
};

export { monthName, getCalender, coverDateString };
