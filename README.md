# Response Handler Express

## Overview

Response Handler Express is a lightweight, easy-to-use HTTP response handler for Express applications. It provides a set of methods to standardize and simplify response handling for various HTTP status codes, from successful responses to client and server errors.

## Features

- Handles various HTTP status codes (e.g., 200, 201, 400, 401, etc.)
- Simplifies response handling in Express applications
- Improves code readability and maintainability

## Installation

To install the package, run the following command:

```bash
npm install response-handler-express
```

## Usage

Here's a basic example of how to use Response Handler in an Express application:

## Features

- Standardized Responses: Pre-built methods for common HTTP status codes, including 200 OK, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error, and more.
- Customizable Responses: Accepts a message, data, and token (optional), allowing flexibility in response structure.
- Improved Code Readability: Centralizes response handling for cleaner and more maintainable code.
- Ideal for REST APIs: Perfect for consistent responses in RESTful services.

## Usage

### JavaScript

```javascript
const express = require("express");
const ResponseHandler = require("response-handler-express");

const app = express();

app.get("/", (req, res) => {
  ResponseHandler.success(res, "Request successful", { data: "Sample data" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### TypeScript

```typescript
import express, { Request, Response } from "express";
import ResponseHandler from "response-handler-express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  ResponseHandler.success(res, "Request successful", { data: "Sample data" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

## Methods

- `success(res, message, data?)`: Sends a 200 OK response.
- `created(res, message, data?)`: Sends a 201 Created response.
- `accepted(res, message, data?)`: Sends a 202 Accepted response.
- `noContent(res)`: Sends a 204 No Content response.
- `badRequest(res, message, data?)`: Sends a 400 Bad Request response.
- `unauthorized(res, message, data?)`: Sends a 401 Unauthorized response.
- `forbidden(res, message, data?)`: Sends a 403 Forbidden response.
- `notFound(res, message, data?)`: Sends a 404 Not Found response.
- `conflict(res, message, data?)`: Sends a 409 Conflict response.
- `gone(res, message, data?)`: Sends a 410 Gone response.
- `unprocessableEntity(res, message, data?)`: Sends a 422 Unprocessable Entity response.
- `tooManyRequests(res, message, data?)`: Sends a 429 Too Many Requests response.
- `internalError(res, message, data?)`: Sends a 500 Internal Server Error response.
- `badGateway(res, message, data?)`: Sends a 502 Bad Gateway response.
- `serviceUnavailable(res, message, data?)`: Sends a 503 Service Unavailable response.
- `gatewayTimeout(res, message, data?)`: Sends a 504 Gateway Timeout response.
- `logInSuccess(res, message, data?, token?)`: Sends a 200 OK response for successful login including an optional token.
- `tokenExpired(res, message?)`: Sends a 401 Unauthorized response when a session token is expired.
- `invalidToken(res, message?)`: Sends a 401 Unauthorized response for an invalid token.

## License

This project is licensed under the ISC License.

## Author

Abdelrahman Ashraf Osman
