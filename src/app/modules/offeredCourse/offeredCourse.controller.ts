import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseService } from './offeredCourse.services';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.insertIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getByIdFromDb(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.deleteByIdFromDb(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.updateOneIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDb,
  deleteByIdFromDb,
  updateOneIntoDB
};
