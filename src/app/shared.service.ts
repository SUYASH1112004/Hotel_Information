import { Injectable } from '@angular/core';
import { restaurentdata } from './restaurantdash/restaurant.model';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService 
{
  [x: string] : any;

  addrestaurent(restobj : restaurentdata)
  {
   

  }
  constructor(private http : HttpClient) { }

  //post reuest
  postrequest(data : any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))

  }

  //get request
  getrestaurent()
  {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }));
  }
  
  //delete request
  deleterestaurent(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
return res
    }))
  }


//update request
updaterequest(id:number,data : any)
{
  return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
    return res
  }))
}



}
