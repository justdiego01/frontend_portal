import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private httpClient:HttpClient) {
    
  }

  public generartoken (datalogin:any){
    return this.httpClient.post(`${urlbase}/autenticacion/generartoken`,datalogin);
  }

  public loginuser (token:any){
    localStorage.setItem('token',token);
    return true;
  }

  public getCurrentUser (){
    return this.httpClient.get(`${urlbase}/autenticacion/userloggin`,{ 
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
  }
 
   );
  }

  public gettoken(){
    localStorage.getItem('token')
  }


  public setuser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getuser(){
    let userStr = localStorage.getItem('user');

    if (userStr != null){
      return JSON.parse(userStr);
    }else{
        this.logout();
        return null
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public isloggin (){
    let tokenStr = localStorage.getItem('token');

    if (tokenStr == null || tokenStr == undefined || tokenStr == ''){
      return false;
    }else{
      return true;
    }
  }

  public getUserRol(){
    let userrol = this.getuser();
    return userrol.authorities[0].authority;

  }

}
