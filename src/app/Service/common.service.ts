import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// for razorpay payment getway
function _window() : any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  get nativeWindow() : any {
    return _window();
 }
 
  constructor(private http:HttpClient) { }

         getLocation(){
          return this.http.get('https://ipapi.co/json')
         }
   
}
