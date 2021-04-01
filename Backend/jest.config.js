// const {defaults} = require('jest-config');
// module.exports = {
//   // ...
//   moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
//   // ...
// };

module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    }
  };