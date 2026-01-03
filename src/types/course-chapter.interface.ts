import { CourseLecture } from "./course-lecture.interaface";

export interface CourseChapter {
  id: number;
  title: string;
  numOfLectures: number;
  duration: string;
  lectures: CourseLecture[];
}
