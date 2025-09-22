change imported_path to imported_from in csharp chunker


com/.../a.java -> ../b.java, ../c.java
com/.../b.java -> ../d.java

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
