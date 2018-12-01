class HttpException extends Error {
  toJSON() {
    return { error: this.message };
  }
}

class BadRequestHttpException extends HttpException {
  constructor(msg) {
    super(msg);
    this.type = 'bad_request_error';
    this.status = 400;
  }
}

class ConflictHttpException extends HttpException {
  constructor(msg) {
    super(msg);
    this.type = 'conflict_error';
    this.status = 409;
  }
}

class NotFoundHttpException extends HttpException {
  constructor(msg) {
    super(msg);
    this.type = 'not_found_error';
    this.status = 404;
  }
}

class UnauthorizedHttpException extends HttpException {
  constructor(msg) {
    super(msg);
    this.type = 'unauthorized_error';
    this.status = 401;
  }
}

module.exports = {
  BadRequestHttpException,
  ConflictHttpException,
  NotFoundHttpException,
  UnauthorizedHttpException,
};
