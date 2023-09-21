import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { IGenericErrorResponse } from '../../../interfaces/common';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';

// * Create Student
const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadedImage) {
    req.body.student.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  //   Academic Department
  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  // Academic Faculty

  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }

  //   Academic Semester
  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters?syncId=${academicSemester}`
  );
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  const response: IGenericErrorResponse = await AuthService.post(
    '/users/create-student',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return {
    response
  };
};

// * Create Faculty
const createFaculty = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadedImage) {
    req.body.faculty.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty } = req.body.faculty;
  //   Academic Department
  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse?.data[0]?.id;
  }

  // Academic Faculty

  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
  }

  console.log(req.body);

  // * Creating Faculty InTo The MongoDB Data Base By Auth Services 🚀🚀
  const response: IGenericErrorResponse = await AuthService.post(
    '/users/create-faculty',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};
// * Create Admin
const createAdmin = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadedImage) {
    req.body.admin.profileImage = uploadedImage.secure_url;
  }
  // * Creating Faculty InTo The MongoDB Data Base By Auth Services 🚀🚀
  const response: IGenericErrorResponse = await AuthService.post('/users/create-admin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

// * Exports
export const UserService = {
  createStudent,
  createFaculty,
  createAdmin
};
