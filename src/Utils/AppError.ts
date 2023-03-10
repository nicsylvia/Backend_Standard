export enum HTTPCODES {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    BAD_REQUESTED = 400,
    UNAUTHORIZED = 401,
    UNPROCESSABLE_IDENTITY = 422,
    CONFLICT = 409,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    NOT_ACCEPTED = 406,
    INTERNAL_SERVER_ERROR = 500,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 508
}

interface ErrorTags{
    name? : string;
    isOperational? : boolean;
    message? : string;
    httpcode : HTTPCODES
}