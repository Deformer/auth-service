const { get } = require('lodash');

const {
  errorCodes,
} = require('errors-list/http-errors');

const errorHandler = (err, req, res, next) => {
  const isJoi = get(err, 'error.isJoi', false);
  if (isJoi) {
    return res.status(400).json({
      error: err.error.toString(),
    });
  }

  const errorCodesSet = new Set(Object.values(errorCodes));

  if (errorCodesSet.has(err.code)) {
    return res.status(err.status).json(err.toJSON());
  }

  console.error(err);
  return res.status(500).send('Internal Server Error');
};

module.exports = {
  errorHandler,
};
