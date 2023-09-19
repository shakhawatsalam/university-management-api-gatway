import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { CourseService } from './course.services';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getByIdFromDb(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteByIdFromDb(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.updateOneIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDb,
  deleteByIdFromDb,
  updateOneIntoDB
};
