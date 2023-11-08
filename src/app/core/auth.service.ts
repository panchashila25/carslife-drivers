import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Driver } from './models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public currentUserSubject: BehaviorSubject<Driver>;
    private currentUser:Observable<Driver>
    constructor(public http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Driver>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() : Driver{
        return this.currentUserSubject.value;
    }

  // Login Drivers

    login(data:any){
        console.log(data)
        return this.http.post<any>(`${environment.baseURL}auth/authenticate`,data,{
          headers:{
            'Content-Type':'application/json'
          }
        })
        .pipe(map((data,re)=>{
            localStorage.setItem("currentUser",JSON.stringify(data.data));
            this.currentUserSubject.next(data.data);
          return data;
        }));
    }


// Logout Driver

logout() {
  localStorage.removeItem("currentUser");
  this.currentUserSubject.next(null!);
  window.location.replace("/")
}
}
