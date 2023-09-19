import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { BuildingService } from './building.services';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getByIdFromDb(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteByIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteByIdFromDb(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateOneIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDb,
  deleteByIdFromDb,
  updateOneIntoDB
};
