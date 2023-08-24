export default function formatDate(date) {
  const currDate = new Date(date);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dayName = days.at(currDate.getDay());
  const dayNum = currDate.getDate();
  const monthName = months.at(currDate.getMonth());
  const hour = currDate.getHours();
  const dateString = `${dayName}, ${dayNum} ${monthName}`;
  // console.log(`${dayName}, ${dayNum} ${monthName}`);
  return dateString;
}
