import express from 'express';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { BuildingRoutes } from '../modules/building/building.routes';
import { CourseRoutes } from '../modules/course/course.routes';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { RoomRoutes } from '../modules/room/room.routes';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { studentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.routes';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { studentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/StudentSemesterPayment.routes';
import { userRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    routes: userRoutes
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/buildings',
    routes: BuildingRoutes
  },
  {
    path: '/rooms',
    routes: RoomRoutes
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/offered-courses',
    routes: OfferedCourseRoutes
  },
  {
    path: '/semester-registrations',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/offred-course-sections',
    routes: OfferedCourseSectionRoutes
  },
  {
    path: '/offred-course-class-schedule',
    routes: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/student-semester-payments',
    routes: studentSemesterPaymentRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: studentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: studentEnrolledCourseRoutes
  }
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.routes);
});

export default router;
