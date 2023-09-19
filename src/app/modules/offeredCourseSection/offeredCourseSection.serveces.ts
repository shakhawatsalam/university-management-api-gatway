import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/offred-course-sections', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/offred-course-sections', {
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
  const response: IGenericResponse = await HttpService.get(`/offred-course-sections/${id}`);

  return response;
};

const updateOneIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/offred-course-sections/${id}`,
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

const deleteByIdFromDb = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/offred-course-sections/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const OfferedCourseSectionService = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDb,
  deleteByIdFromDb
};
