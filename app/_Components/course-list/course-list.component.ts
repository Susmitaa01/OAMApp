import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_Models/course.model';
import { CourseService } from 'src/app/_Services/course.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { College } from 'src/app/_Models/college.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseDetail!:FormGroup;
courseObj:Course=new Course();

courseList:Course[]=[];
  constructor(private formBuilder:FormBuilder,private courseService:CourseService) { }

  ngOnInit(): void {
    // this.loadData();
    this.getAllCourses();
    this.courseDetail=this.formBuilder.group({
      courseId:[''],
      courseName:[''],
      eligibity:[''],
      collegeRegId:['']
    });
  }
  addCourse(){
    console.log(this.courseDetail);
    this.courseObj.courseId=this.courseDetail.value.courseId;
    this.courseObj.courseName=this.courseDetail.value.courseName;
    this.courseObj.eligibity=this.courseDetail.value.eligibity;
    this.courseObj.college=new College();
    this.courseObj.college.collegeRegId=this.courseDetail.value.collegeRegId;
    this.courseService.addCourse(this.courseObj).subscribe({
      next:(res:any)=>{
      console.log(res);
      this.getAllCourses();
    },
    error:err=>{
      console.log(err);
    }
    });
       
       
    // this.courseService.addCourse(this.courseObj).subscribe(res=>{
    //   console.log(res);
    //   this.getAllAdmins();
    // },err=>{
    //   console.log(err);
    // });

  }
  getAllCourses(){
    this.courseService.getAllCourses().subscribe({
      next:(res:any)=>{
       //this.courseList.college=new College();
      this.courseList=res;
      // console.log(res);
    },
    error:(err:any)=>{
      console.log("error while fetchind data");
    }
    });

  }
 editCourse(c:Course){
    this.courseDetail.controls['courseId'].setValue(c.courseId);
    this.courseDetail.controls['courseName'].setValue(c.courseName);
    this.courseDetail.controls['eligibity'].setValue(c.eligibity);
    this.courseDetail.controls['collegeRegId'].setValue(c.college?.collegeRegId);
  }
  updateCourse(){
    this.courseObj.courseId=this.courseDetail.value.courseId;
    this.courseObj.courseName=this.courseDetail.value.courseName;
    this.courseObj.eligibity=this.courseDetail.value.collegeRegId;
  this.courseObj.college=new College();
    this.courseObj.college.collegeRegId=this.courseDetail.value.collegeRegId;
    this.courseService.updateCourse(this.courseObj).subscribe({
      next:(res:any)=>{
      console.log(res);
      this.getAllCourses();
    },
    error:(err:any)=>{
      console.log(err);
    }
    });
  }
  deleteCourse(c:Course){
    this.courseService.deleteCourse(c).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert('Course deleted successfullly');
        this.getAllCourses();
    },
    error:(err:any)=>{
      console.log(err);
    }
  });
}
}
  // loadData(){
  //   this.courseService.getCourseList()
  //   .subscribe({
  //     next:(response:any)=>{
  //       alert(Response);
  //       this.courseList=response;
  //     },
  //     error:(error)=>{
  //       console.log(error);
  //     }
  //   });

  