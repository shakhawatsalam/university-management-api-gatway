import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';

const router = express.Router();

router.get('/', SemesterRegistrationController.getAllFromDB);
router.get(
  '/get-my-registration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.getMyRegistration
);

router.get(
  '/my-semester-registration-courses',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.mySemesterRegistrationCourses
);
router.get('/:id', SemesterRegistrationController.getByIdFromDb);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(SemesterRegistrationValidation.create),
  SemesterRegistrationController.insertIntoDB
);
router.post(
  '/enroll-into-course',
  validateRequest(SemesterRegistrationValidation.enrollOrWithdawCourse),
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.enrollIntoCourse
);

router.post(
  '/withdraw-from-course',
  validateRequest(SemesterRegistrationValidation.enrollOrWithdawCourse),
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.withDrawFromCourse
);

router.post(
  '/confirm-registration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.confirmRegistration
);

router.post(
  '/start-registration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.startRegistration
);

router.post(
  '/:id/start-new-semester',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.startNewSemester
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(SemesterRegistrationValidation.update),
  SemesterRegistrationController.updateOneIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.deleteByIdFromDb
);

export const SemesterRegistrationRoutes = router;
