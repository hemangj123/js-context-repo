async function getDataFromApi(startTime, endTime, currency, version) {
  return {
    status: "success",
    data: {
      startTime,
      endTime,
      currency,
      version,
      values: [/* simulated data */]
    }
  };
}

module.exports = { getDataFromApi };
