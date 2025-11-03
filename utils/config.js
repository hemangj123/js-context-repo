const supportedVersions = new Set(["v1", "v2"]);

function isSupportedVersion(version) {
  return supportedVersions.has(version);
}

module.exports = { isSupportedVersion };
