module.exports = {
  './src/**/*.+(ts|tsx|js|jsx)': ['yarn eslint --fix --cache'],
  './src/**/*.+(ts|tsx|js|jsx)': ['yarn prettier --write'],
  './src/**/*.+(ts|tsx|js|jsx)': [() => 'tsc --project ./tsconfig.json --noEmit'],
};
