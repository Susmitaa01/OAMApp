import { College } from "./college.model";
import { Course } from "./course.model";

export class Branch {
    branchId?: number;
    branchName?: string;
    branchDescription?: string;
    collegeRegId?: number;
    courseId?: number;
    courses?: Course;
    colleges?:College;
}
