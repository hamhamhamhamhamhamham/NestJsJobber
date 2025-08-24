const path = require('path');

module.exports = {
  '*.ts': (files) =>
    `nx affected:lint --fix --files ${files
      .map((f) => path.relative(process.cwd(), f))
      .join(' ')}`,
  '*': (files) =>
    `nx format:write --files ${files
      .map((f) => path.relative(process.cwd(), f))
      .join(' ')}`,
};
