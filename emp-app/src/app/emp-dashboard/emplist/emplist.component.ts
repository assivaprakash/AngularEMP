import { Component, OnInit } from '@angular/core';
import { AppsvcService } from '../services/appsvc.service';
import { Posts } from '../model/app-emp.model';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {  
  allPost: Posts[];
  constructor(private post: AppsvcService) { }
  ngOnInit(): void {
    this.post.getPostData().subscribe(data=>{      
      
      console.warn(data);
      this.allPost=data;
    });
  }

}

