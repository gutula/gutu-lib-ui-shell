#!/usr/bin/env node
const summary = {
  "repoName": "gutu-lib-ui-shell",
  "packageId": "ui-shell",
  "displayName": "UI Shell",
  "packageCount": 1,
  "group": "UI Foundation",
  "maturity": "Hardened",
  "description": "Shared shell registry, navigation, provider, and telemetry contracts.",
  "publicModules": 6,
  "exportedSymbols": 43,
  "verificationLabel": "Build+Typecheck+Lint+Test",
  "uiSurface": "Mixed runtime helpers",
  "consumptionModel": "Imports + typed UI primitives"
};
console.log(JSON.stringify(summary, null, 2));
