import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private route:Router) { }
  currentToken: any;
 RegisterUser(email: string, password:string)
 {     
   firebase.auth().createUserWithEmailAndPassword(email,password).then(resp=>{console.log(resp)
    this.route.navigate(['/login']);
  })
   .catch(error=>{console.log(error)
  
  })
 }

 LoginUser(email: string, password:string)
 {     
   firebase.auth().signInWithEmailAndPassword(email,password).then(resp=>{
     this.getToken();
     this.route.navigate(['/emplist']);
     console.log(resp);
   
   })
   .catch(error=>{console.log(error)})
 }

 getToken()
 {
   firebase.auth().currentUser?.getIdToken()
   .then(
     (token:string)=>{
       this.currentToken=token        
     }
   );
   
   return this.currentToken;
 }

 isAuthenticated()
 {
   
   return this.currentToken !=null?true:false;
 }
 onLogOut()
 {
   this.currentToken =null;
   firebase.auth().signOut();
   this.route.navigate(['/login']);
 }
}
