import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  isText: any;
  eyeIcon!: string;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email:['',Validators.required],

      password:['',Validators.required],
    
      role:['',Validators.required]
  })

}
hideShowPass(){
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
}


login(){

this.http.get<any>("http://localhost:3000/SignUpUsers")

.subscribe(res=>{

 const user = res.find((a:any)=>{

 return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password

});

if(user){

alert("Login Sucess!!");

this.loginForm.reset();

this.router.navigate(['dashboard'])

}else{

alert("user not found!!");

}
},err=>{

alert("Something went wrong");
})
}
}