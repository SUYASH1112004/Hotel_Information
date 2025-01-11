import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { restaurentdata } from './restaurant.model';

@Component({
  selector: 'app-restaurantdash',
  templateUrl: './restaurantdash.component.html',
  styleUrl: './restaurantdash.component.css'
})
export class RestaurantdashComponent implements  OnInit{
  
  formvalue!:FormGroup
  restaurentobj : restaurentdata = new restaurentdata;
  allrestaurentdata : any ;
  showadd !: boolean;
  showbtn !:boolean;

  constructor(private formbuilder:FormBuilder,private api:SharedService)
  {

  }
  ngOnInit(): void {
      this.formvalue =this.formbuilder.group
      ({
        id:[''],
        name:[''],
        email:[''],
        mobile:[''],
        address:[''],
        services:['']
      })
      this.getAllData()
  }

  clickaddresto()
  {
    this.formvalue.reset();
    this.showadd=true;
    this.showbtn=false;
  }

  addrestaurent()
  {
    
    this.restaurentobj.id=this.formvalue.value.id;
    this.restaurentobj.name=this.formvalue.value.name;
    this.restaurentobj.email=this.formvalue.value.email;
    this.restaurentobj.mobile=this.formvalue.value.mobile;
    this.restaurentobj.address=this.formvalue.value.address;
    this.restaurentobj.services=this.formvalue.value.services;
  
    this.api.postrequest(this.restaurentobj).subscribe((res)=>{
      console.log(res);
      alert("Restaurent Added Successfully");
      this.formvalue.reset();

      let ref=document.getElementById('close');
      ref ?.click();

      this.getAllData();
    },err=>{
      console.log(err);
      alert("Restaurent Added Failed!")

    })
  }

  
  getAllData()
  {
    this.api.getrestaurent().subscribe((res)=>{
      this.allrestaurentdata=res;

    },err=>{
      console.log(err);
    })
  }

  deleteresto(data : any)
  {
    this.api.deleterestaurent(data).subscribe((res : any)=>{
      console.log(res)
      alert("Restaurent deleted Successfully")
      this.getAllData();
    })
  }

  oneditresto(data : any)
  {
    this.showadd = false;
    this.showbtn=true;

    this.restaurentobj.id=data.id;
    this.formvalue.controls['name'].setValue(data.name);
    this.formvalue.controls['email'].setValue(data.email);
    this.formvalue.controls['mobile'].setValue(data.mobile);
    this.formvalue.controls['address'].setValue(data.address);
    this.formvalue.controls['services'].setValue(data.services);

    // this.getAllData()

  }

  updateResto()
  {
    this.restaurentobj.name=this.formvalue.value.name;
    this.restaurentobj.email=this.formvalue.value.email;
    this.restaurentobj.mobile=this.formvalue.value.mobile;
    this.restaurentobj.address=this.formvalue.value.address;
    this.restaurentobj.services=this.formvalue.value.services;

    this.api.updaterequest(this.restaurentobj.id,this.restaurentobj).subscribe((res:any)=>{
      alert("Restaurent Updated Successfully")
      this.formvalue.reset();

      let ref = document.getElementById('close')
      ref ?.click()

      this.getAllData();
    })


  }
  

}
