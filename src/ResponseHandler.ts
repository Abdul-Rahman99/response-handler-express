import { Response } from "express";

class ResponseHandler {
  // 200 OK
  static success(res: Response, message: string, data: any = null): Response {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  // 201 Created
  static created(res: Response, message: string, data: any = null): Response {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }

  // 202 Accepted
  static accepted(res: Response, message: string, data: any = null): Response {
    return res.status(202).json({
      success: true,
      message,
      data,
    });
  }

  // 204 No Content
  static noContent(res: Response): Response {
    return res.status(204).send();
  }

  // 400 Bad Request
  static badRequest(
    res: Response,
    message: string,
    data: any = null
  ): Response {
    return res.status(400).json({
      success: false,
      message,
      data,
    });
  }

  // 401 Unauthorized
  static unauthorized(
    res: Response,
    message: string,
    data: any = null
  ): Response {
    return res.status(401).json({
      success: false,
      message,
      data,
    });
  }

  // 403 Forbidden
  static forbidden(res: Response, message: string, data: any = null): Response {
    return res.status(403).json({
      success: false,
      message,
      data,
    });
  }

  // 404 Not Found
  static notFound(res: Response, message: string, data: any = null): Response {
    return res.status(404).json({
      success: false,
      message,
      data,
    });
  }

  // 409 Conflict
  static conflict(res: Response, message: string, data: any = null): Response {
    return res.status(409).json({
      success: false,
      message,
      data,
    });
  }

  // 410 Gone
  static gone(res: Response, message: string, data: any = null): Response {
    return res.status(410).json({
      success: false,
      message,
      data,
    });
  }

  // 422 Unprocessable Entity
  static unprocessableEntity(
    res: Response,
    message: string,
    data: any = null
  ): Response {
    return res.status(422).json({
      success: false,
      message,
      data,
    });
  }

  // 429 Too Many Requests
  static tooManyRequests(
    res: Response,
    message: string,
    data: any = null
  ): Response {
    return res.status(429).json({
      success: false,
      message,
      data,
    });
  }

  // 500 Internal Server Error
  static internalError(
    res: Response,
    message: string,
    data: any = null
  ): Response {
    return res.status(500).json({
      success: false,
      message,
      data,
    });
  }

  // 502 Bad Gateway
  static badGateway(
    res: Response,
    message: string,
    data: any = null
  ): Response {
    return res.status(502).json({
      success: false,
      message,
      data,
    });
  }

  // 503 Service Unavailable
  static serviceUnavailable(
    res: Response,
    message: string,
    data: any = null
  ): Response {
    return res.status(503).json({
      success: false,
      message,
      data,
    });
  }

  // 504 Gateway Timeout
  static gatewayTimeout(
    res: Response,
    message: string,
    data: any = null
  ): Response {
    return res.status(504).json({
      success: false,
      message,
      data,
    });
  }

  // new authentication and authorization methods

  // 200 OK Login Success with token
  static logInSuccess(
    res: Response,
    message: string,
    data: any = null,
    token: string | null = null
  ): Response {
    const responseBody: any = {
      success: true,
      message,
      data,
      token,
    };
    if (data === null && token) {
      responseBody.token = token;
    }

    return res.status(200).json(responseBody);
  }

  // 401 Token Expired
  static tokenExpired(
    res: Response,
    message: string = "Session expired, please log in again.",
    data: any = null
  ): Response {
    return res.status(401).json({
      success: false,
      message,
      data,
    });
  }

  // 401 Invalid Token
  static invalidToken(
    res: Response,
    message: string = "Invalid token, access denied.",
    data: any = null
  ): Response {
    return res.status(401).json({
      success: false,
      message,
      data,
    });
  }
}

export default ResponseHandler;
