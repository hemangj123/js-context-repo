function parseFinalTime(timeStr) {
  return new Date(timeStr);
}

function subtractDuration(date, hours) {
  const result = new Date(date);
  result.setHours(result.getHours() - hours);
  return result;
}

module.exports = { parseFinalTime, subtractDuration };
