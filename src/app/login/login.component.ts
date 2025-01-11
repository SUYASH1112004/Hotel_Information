import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validator } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit
{
  loginform !: FormGroup
  constructor(private formbuilder : FormBuilder,private http : HttpClient,private router: Router)
  {}
  ngOnInit(): void {
      this.loginform=this.formbuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(5)]]
      })
  }


login()
{
  console.log(this.loginform.value);
  
  if(this.loginform.invalid )
  {    this.loginform.markAllAsTouched();
    return;
  }
  this.http.get<any>('http://localhost:3000/signup').subscribe(res=>{
    const user=res.find((u:any)=>u.email == this.loginform.value.email);

    if(!user){
      alert ('This Email is not registered')
      this.loginform.reset();
      return;
    }
    else if(user.password != this.loginform.value.password)
    {
      alert("Incorrect Password");
      return;
    }
    else{
      console.log(this.loginform.value);
      alert(this.loginform.value.email + "Login Succesfull")
      this.router.navigate(['/restaurent']);
      this.loginform.reset();
      // return;
      
      }
    })  
  
}



}
