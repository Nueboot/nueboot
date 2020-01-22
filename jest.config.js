module.exports = {
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/jest/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "typeface-heebo": "identity-obj-proxy"
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupEnzyme.ts"]
};
