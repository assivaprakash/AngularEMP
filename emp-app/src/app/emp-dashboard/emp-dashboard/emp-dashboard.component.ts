import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../model/app-emp.model';
import { AppsvcService } from '../services/appsvc.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  allPost: Posts[];
  constructor(private route: ActivatedRoute,private post: AppsvcService) { }
  ngOnInit(): void {
    this.post.getCommantByParameter(this.route.snapshot.params['id']).subscribe(data=>{      
      
      console.warn(data);
      this.allPost=data;
    });
  }

}
