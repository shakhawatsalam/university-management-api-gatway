import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-faculties', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-faculties', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getByIdFromDb = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/academic-faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const deleteByIdFromDb = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/academic-faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const updateOneIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/academic-faculties/${id}`,
    req.body,
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

export const AcademicFacultyServices = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDb,
  updateOneIntoDB,
  deleteByIdFromDb
};
