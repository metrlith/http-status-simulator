export const httpStatusCodes = [
  {
    code: 200,
    message: "OK",
    description: "The request has succeeded."
  },
  {
    code: 301,
    message: "Moved Permanently",
    description: "The requested resource has been assigned a new permanent URI."
  },
  {
    code: 400,
    message: "Bad Request",
    description: "The request could not be understood by the server due to malformed syntax."
  },
  {
    code: 401,
    message: "Unauthorized",
    description: "The request requires user authentication."
  },
  {
    code: 403,
    message: "Forbidden",
    description: "The server understood the request, but refuses to authorize it."
  },
  {
    code: 404,
    message: "Not Found",
    description: "The server has not found anything matching the Request-URI."
  },
  {
    code: 418,
    message: "I'm a teapot",
    description: "The server refuses to brew coffee because it is a teapot."
  },
  {
    code: 500,
    message: "Internal Server Error",
    description: "The server encountered an unexpected condition."
  }
];
