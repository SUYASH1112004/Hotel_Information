import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  signform!:FormGroup
  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router : Router)
  {}

  ngOnInit(): void {
      this.signform=this.formbuilder.group({
        name:[''],
        email:[''],
        mobile:[''],
        password:['']
      })
  }

  Signup()
  {
    this.http.post<any>('http://localhost:3000/signup',this.signform.value).subscribe(res=>{
      console.log(res)
      alert('signup Successfully');
      this.signform.reset();
      this.router.navigate(['/login']);
    }),(err:any)=>{
      console.log(err);
      alert('signup error');
    }
    
  }
}

