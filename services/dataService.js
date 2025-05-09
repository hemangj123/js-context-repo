const { parseFinalTime, subtractDuration } = require('../utils/timeUtils');
const { isSupportedVersion } = require('../utils/config');
const { getDataFromApi } = require('../api/apiClient');

async function fetchData(finalTime, currency, version, duration = 0) {
  if (!isSupportedVersion(version)) {
    throw new Error(`Unsupported version: ${version}`);
  }

  const endTime = parseFinalTime(finalTime);
  const startTime = subtractDuration(endTime, duration);

  return getDataFromApi(startTime.toISOString(), endTime.toISOString(), currency, version);
}

module.exports = { fetchData };
