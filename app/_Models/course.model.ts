import { Branch } from "./branch.model";
import { College } from "./college.model";

export class Course {
    courseId?: number;
    courseName?: string;
    college?:College;
    eligibity?: string;
   // collegeRegId?:number;
    branches?: Branch[];
}
