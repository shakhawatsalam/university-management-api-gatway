import { Request } from 'express';
import { CoreService as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/buildings', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/buildings', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

// Task Get By ID
const getByIdFromDb = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/buildings/${id}`);

  return response;
};

const updateOneIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/buildings/${id}`, req.body, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const deleteByIdFromDb = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/buildings/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const BuildingService = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDb,
  deleteByIdFromDb
};
