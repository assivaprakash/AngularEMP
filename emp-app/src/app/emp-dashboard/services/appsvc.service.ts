import { Injectable } from "@angular/core";
import { HttpClient,HttpParams } from "@angular/common/http";
import { Posts } from '../model/app-emp.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class AppsvcService {
  constructor(private http:HttpClient){}
  getPostData():Observable<any>{
      let url="https://jsonplaceholder.typicode.com/posts";    
      return this.http.get(url);
  }

  getCommantByParameter(id:string):Observable<any>{
      let par=new HttpParams().set('userId',id);
      let url="https://jsonplaceholder.typicode.com/posts";
      return this.http.get(url,{params:par});
  }
}
