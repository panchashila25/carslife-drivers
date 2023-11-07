import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

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

GetallDriver(data:any){
  return this.http.post<any>(`${environment.baseURL}driver/get`,data,{
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
}