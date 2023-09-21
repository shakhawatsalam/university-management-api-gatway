import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/response';
import { UserService } from './user.service';
// * Create Student
const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createStudent(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result.response
    });
  } catch (error) {
    next(error);
  }
};

// * Create Faculty
const createFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createFaculty(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};
// * Create Admin
const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createAdmin(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

// * Export's
export const UserController = {
  createStudent,
  createFaculty,
  createAdmin
};
