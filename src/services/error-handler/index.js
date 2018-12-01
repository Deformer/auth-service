const { get } = require('lodash');

const {
  BadRequestHttpException,
  ConflictHttpException,
  NotFoundHttpException,
  UnauthorizedHttpException,
} = require('../../common/errors');

const errorHandler = (err, req, res, next) => {
  console.error(err);
  const isJoi = get(err, 'error.isJoi', false);
  if (isJoi) {
    return res.status(400).json({
      error: err.error.toString(),
    });
  }
  if (
    err instanceof BadRequestHttpException
    || err instanceof ConflictHttpException
    || err instanceof NotFoundHttpException
    || err instanceof UnauthorizedHttpException
  ) {
    return res.status(err.status).json(err.toJSON());
  }

  return res.status(500).json({ error: err.message });
};

module.exports = {
  errorHandler,
};
