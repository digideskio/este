import { BaseError } from 'make-error';

export default class ValidationError extends BaseError {

  static isInvalid(error, prop) {
    if (!(error instanceof ValidationError)) return false;
    return error.params.prop === prop;
  }

  constructor(name, params = {}) {
    super(`ValidationError: ${JSON.stringify({ name, params })}`);
    this.name = name;
    this.params = params;
  }

}
