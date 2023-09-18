import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitles
} from './academicSemester.constants';

const create = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is required'
    }),
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required'
    }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'Code is required'
    }),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'Start month is required'
    }),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'End month is required'
    })
  })
});

const update = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]]).optional(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]).optional(),
    year: z.number().optional(),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]]).optional(),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]]).optional()
  })
});

export const AcademicSemesterZodValidation = {
  create,
  update
};
