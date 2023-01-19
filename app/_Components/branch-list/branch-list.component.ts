import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Branch } from 'src/app/_Models/branch.model';
import { BranchService } from 'src/app/_Services/branch.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
  branchDetail!:FormGroup;
  branchObj:Branch=new Branch();
  branchList:Branch[]=[];
  constructor(private formBuilder:FormBuilder,private branchService:BranchService) {

   }

  ngOnInit(): void {
// this.loadData();
//   }
//   loadData(){
//     this.branchService.getBranchList()
//     .subscribe({
//       next:(response:any)=>{
//         alert(response);
//         this.branchList=response;
//       },
//       error:(error)=>{
//         console.log(error);
//       }
//     });
//   }

this.getAllBranches();
this.branchDetail=this.formBuilder.group({
 branchDescription:[''],
 branchName:[''], 
  collegeRegId:[''],
  courseId:['']
});
}
addBranch(){
  console.log(this.branchDetail);
  this.branchObj.branchId=this.branchDetail.value.branchId;
  this.branchObj.branchDescription=this.branchDetail.value.courseName;
  this.branchObj.branchName=this.branchDetail.value.branchName;
  // this.branchObj.=new Branch();
  // this.branchObj.college.collegeRegId=this.courseDetail.value.collegeRegId;
  this.branchObj.collegeRegId=this.branchDetail.value.collegeRegId;
  this.branchService.addBranch(this.branchObj).subscribe({
    next:(res:any)=>{
    console.log(res);
    this.getAllBranches();
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
getAllBranches(){
  this.branchService.getAllBranches().subscribe({
    next:(res:any)=>{
     //this.courseList.college=new College();
    this.branchList=res;
    // console.log(res);
  },
  error:(err:any)=>{
    console.log("error while fetchind data");
  }
  });

}
editBranch(b:Branch){
  this.branchDetail.controls['branchId'].setValue(b.branchId);
  this.branchDetail.controls['branchDescription'].setValue(b.branchDescription);
  this.branchDetail.controls['branchName'].setValue(b.branchName);
  this.branchDetail.controls['collegeRegId'].setValue(b.collegeRegId);
  this.branchDetail.controls['courseId'].setValue(b.courseId);
}
updateBranch(){
  this.branchObj.branchId=this.branchDetail.value.branchId;
  this.branchObj.branchDescription=this.branchDetail.value.branchDescription;
  this.branchObj.branchName=this.branchDetail.value.branchName;
// this.branchObj.college=new College();
  this.branchObj.collegeRegId=this.branchDetail.value.collegeRegId;
  this.branchObj.courseId=this.branchDetail.value.courseId;
  this.branchService.updateBranch(this.branchObj).subscribe({
    next:(res:any)=>{
    console.log(res);
    this.getAllBranches();
  },
  error:(err:any)=>{
    console.log(err);
  }
  });
}
deleteBranch(b:Branch){
  this.branchService.deleteBranch(b).subscribe({
    next:(res:any)=>{
      console.log(res);
      alert('Branch deleted successfullly');
      this.getAllBranches();
  },
  error:(err:any)=>{
    console.log(err);
  }
});
}
}

