import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
//207.154.201.13:8092
export class ServisService {
 public  apiUrl:string = 'http://207.154.201.13:8092';
  constructor(private http: HttpClient,private toastr: ToastrService) { }

 IsloggedIn():boolean{
 const token = localStorage.getItem('token');
  if(token){
this.showSuccess("başarılı giriş");
 return true;
  }
  else{

    this.showError("başarısız giriş");
   return false;
  }
  }

  showSuccess(message){
    this.toastr.success(message);
}
showError(message){
  this.toastr.error(message);
}
 kayıt(obj){
   return this.http.post(this.apiUrl+ '/'+ 'user'+'/'+'signup',obj);
 }

 GetAll(ruya){
  return this.http.get(this.apiUrl+'/'+'website',ruya);
 }

 GetToken(obj){
  return this.http.post(this.apiUrl+'/'+ 'user'+'/'+'signin',obj);
 }
 Create(obj){
   return this.http.post(this.apiUrl+'/'+ 'keywords',obj);
 }
 delete(güncelle:number){
  return this.http.delete(this.apiUrl+'/'+ 'keywords'+'/'+ güncelle);
 }
GetById(id:number){
  return this.http.get(this.apiUrl+'/'+'keywords'+'/'+id);
 }

 GetKullanici(id:number){
  return this.http.get(this.apiUrl+'/'+'user'+'/'+id);

 }
}


