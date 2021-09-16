export const cleanDate = (updatedAt) => {
  const dateOptions = { month: 'long', day: 'numeric' };
  const dateYearOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: '2-digit' };

  const today = new Date(updatedAt);
  const convertUnit = 1000 * 3600 * 24; // 1000ms in 1s, 3600s in 1h, 24h in 1d

  let timeLapsed = Date.now() - Date.parse(today);
  // find difference in time
  if (
    today.year === Date.now.year &&
    Math.floor(timeLapsed / convertUnit) > 0
  ) {
    // year hasn't changed, omit year in returned string
    return `${today.toLocaleDateString(
      'en-US',
      dateOptions
    )} at ${today.toLocaleTimeString('en-US', timeOptions)}`;
  } else if (
    today.year !== Date.now.year &&
    Math.floor(timeLapsed / convertUnit) > 0
  ) {
    // year has changed, update returned string to include year (probably won't need it, but just in case...)
    return `${today.toLocaleDateString(
      'en-US',
      dateYearOptions
    )} at ${today.toLocaleTimeString('en-US', timeOptions)}`;
  } else if (Math.floor(timeLapsed / 3600000) > 0) {
    // if the time lapsed is over an hour:
    if (Math.floor(timeLapsed / 3600000) === 1) {
      // if it's exactly an hour, drop trailing 's'
      return Math.floor(timeLapsed / 3600000) + ' Hour Ago';
    } else {
      return Math.floor(timeLapsed / 3600000) + ' Hours Ago';
    }
  } else {
    // time lapsed < 1hr
    if (Math.floor(timeLapsed / 60000) > 1) {
      // return minutes if over 1, else return minute
      return Math.floor(timeLapsed / 60000) + ' Minutes Ago';
    } else {
      if (Math.floor(timeLapsed / 60000) <= 0) {
        return 'Just Now';
      } else {
        return Math.floor(timeLapsed / 60000) + ' Minute Ago';
      }
    }
  }
};
