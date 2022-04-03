import {GENERIC_ERROR} from './errors';

export class Route {
    constructor(method, url, errors = []) {
        this.method = method;
        this.url = url;
        this.errors = errors;
    }

    parseError(error) {
        const sameStatusCode = this.errors.filter(e => e.statusCode === error.status);
        if (sameStatusCode.length === 0) {
            return RouteError.generic(error);
        } else if (sameStatusCode.length === 1) {
            return new RouteError(sameStatusCode[0].message, error);
        } else {
            const sameErrorCode = sameStatusCode.filter(e =>
                e.errorCode === error.errorCode || (!e.errorCode && !error.errorCode)
            );
            if (sameErrorCode.length === 1) {
                return new RouteError(sameErrorCode[0].message, error);
            } else {
                return RouteError.generic(error);
            }
        }
    }
}

export class RouteErrorMapper {
    constructor(statusCode, errorCode, message) {
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
    }
}

export class RouteError {
    constructor(message, cause) {
        this.message = message;
        this.cause = cause;
    }

    static generic(cause) {
        return new RouteError(GENERIC_ERROR, cause);
    }
}