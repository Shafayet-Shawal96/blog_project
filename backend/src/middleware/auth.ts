import { RequestHandler } from "express";
import createHttpError from "http-errors";

export const requiresAuth: RequestHandler = (req, res, next) => {
  console.log(`Check session ${req.session}`);
  console.log(`Check cookies ${req.cookies}`);
  if (req.session.userId) {
    next();
  } else if (req.cookies.userId) {
    req.session.userId = req.cookies.userId;
  } else {
    next(createHttpError(401, "User not authenticated"));
  }
};
