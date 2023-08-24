export function extractUniqueDays(allData) {
  // this was helped with by chatgpt 3.5
  // 1/ Here, we initialize a Map named dayMap to store the data grouped by days.
  const dayMap = new Map();
  // 2/ We iterate through each day's data in the data.list array.
  allData.forEach(day => {
    // 3/ We create a Date object from the dt_txt property of the current day's data. Then, we extract the year, month, and day from this date to get the unique day.
    const curDate = new Date(day.dt_txt);

    const curDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      curDate.getDate()
    );

    // 4/ We check if the dayMap doesn't already have an entry for the current day. If not, we add an empty array as the value for the current day's timestamp in the map. This ensures that each unique day has an associated array to store its data.
    if (!dayMap.has(curDay.getTime())) {
      dayMap.set(curDay.getTime(), []);
    }
    // 5/ We retrieve the array associated with the current day's timestamp using dayMap.get(curDay.getTime()) and then push the current day's data into that array.
    dayMap.get(curDay.getTime()).push(day);
  });

  // 6/ After processing all the data, we convert the values (arrays of data for each day) from the dayMap into an array named allDates. This array will contain all the data grouped by unique days.
  const allDates = Array.from(dayMap.values());

  // 7/ get the first object inside each of the unique arrays
  const uniqueDays = allDates.map(dayArray => dayArray[0]);
  return uniqueDays;
}
