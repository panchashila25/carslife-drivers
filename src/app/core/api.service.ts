import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _header:any

  constructor(public http:HttpClient) { }

  login(data:any){
    console.log(data)
    return this.http.post<any>(`${environment.baseURL}auth/authenticate`,data,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .pipe(map((data,re)=>{
      return data;
    }));
}


register(data:any){
  console.log(data)
  return this.http.post<any>(`${environment.baseURL}auth/register`,data,{
    headers:this._header
  })
  .pipe(map((data,re)=>{
    return data;
  }));
}




// Create Driver

createDriver(data:any){
  return this.http.post < any > (`${environment.baseURL}driver`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .pipe(map((data: any) => {
    return data;
  }));
}

// Get All Driver

GetallDriver(data:any, page: number = 1, limit: number = 25, searchTerm: any){
  return this.http.post<any>(`${environment.baseURL}driver/get`+ '?page=' + page + '&limit=' + limit + '&searchTerm=' + searchTerm,data,{
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .pipe(map((data:any)=>{
      return data
    }));
}


// Update All Driver

UpdateDriver(id:any,data:any){
  return this.http.put<any>(`${environment.baseURL}driver/`+id,data,{
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .pipe(map((data:any)=>{
    return data
  }))
}


// Delete Driver

DeleteDriver(id:any){
  return this.http.delete(`${environment.baseURL}driver/`+id,{
  })
.pipe(map((data:any)=>{
  return data
}))
}




// Uploaded Documents

onupload(data: any){
  return this.http.post<any>(`${environment.baseURL}comman/upload`, data)
    .pipe(map(data => {
      return data;
    }));

  }
  











  // create transaction
  createTransaction(data:any){
    return this.http.post<any> (`${environment.baseURL}transaction`,data,{
      headers:{
        "Content-Type":"application/json"
    }

  })
  .pipe(map((data:any)=>{
    return data;
  }))
}
// Get all
getTransaction(data:any){
  return this.http.post<any> (`${environment.baseURL}transaction/get`,data,{
    headers:{
      "Content-Type":"application/json"
  }

})
.pipe(map((data:any)=>{
  return data;
}))
}

// updateall
updateTransaction( id:any ,data:any){
  return this.http.post<any> (`${environment.baseURL}transaction/`+id,data,{
    headers:{
      "Content-Type":"application/json"
  }

})
.pipe(map((data:any)=>{
  return data;
}))
}

deleteTransaction(id:any){
  return this.http.post<any> (`${environment.baseURL}transaction/`+id,{
})
.pipe(map((data:any)=>{
  return data;
}))
}




sendOTP(data: any) {
  return this.http.post<any>(`${environment.baseURL}auth/sendOTPs`, data, { 
    headers:
     { 'Content-Type': 'application/json' } })
    .pipe(map((data: any) => {
      return data;
    }));
}
}