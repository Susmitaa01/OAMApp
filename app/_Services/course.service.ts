import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../_Models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  //  private _baseUrl:string="http://localhost:9091/api/courses";
addCourseURL:string;
getCourseURL:string;
updateCourseURL:string;
deleteCourseURL:string;
  // getAllCourse: any;
  constructor(private http:HttpClient) {


this.addCourseURL="http://localhost:9091/api/courses/addCourse";
this.getCourseURL="http://localhost:9091/api/courses/getAll";
this.updateCourseURL="http://localhost:9091/api/courses/updateCourse";
this.deleteCourseURL="http://localhost:9091/api/courses/deleteCourseBycourseId";
   }
   addCourse(c:Course):Observable<Course>{
    return this.http.post<Course>(this.addCourseURL,c);
   }
  // getCourseList():Observable<Course[]>{
  //   return this.http.get<Course[]>(`${this._baseUrl}`)
  
  getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.getCourseURL);
  }
updateCourse(c:Course):Observable<Course>{
return this.http.put<Course>(this.updateCourseURL,c);

}
deleteCourse(c:Course):Observable<Course>{
  return this.http.delete<Course>(this.deleteCourseURL+'/'+c.courseId);
}
}