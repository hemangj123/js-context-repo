const { fetchData } = require('./services/dataService');

async function main() {
  const result = await fetchData("2025-05-01T00:00:00Z", "BTC", "v1", 6);
  console.log(result);
}

main();
