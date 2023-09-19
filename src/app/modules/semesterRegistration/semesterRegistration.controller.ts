import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { SemesterRegistrationService } from './semesterRegistration.services';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getByIdFromDb(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.deleteByIdFromDb(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.updateOneIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDb,
  deleteByIdFromDb,
  updateOneIntoDB
};
