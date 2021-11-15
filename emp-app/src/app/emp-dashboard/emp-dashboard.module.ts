import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmplistComponent } from './emplist/emplist.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';


const routes: Routes = [
  {path:'',component: EmplistComponent}    
  ]; 

@NgModule({
  declarations: [
    EmplistComponent,
    EmpDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  //exports:[EmplistComponent]
})
export class EmpDashboardModule { }

