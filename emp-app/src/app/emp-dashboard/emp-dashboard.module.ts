import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmplistComponent } from './emplist/emplist.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { RegisterformComponent } from './registerform/registerform.component';


const routes: Routes = [
  {path:'',component: EmplistComponent,
  children:[
    {
      path:'registerformgroup', component: RegisterformComponent
    }]}    
  ]; 

@NgModule({
  declarations: [
    EmplistComponent,
    EmpDashboardComponent,
    RegisterformComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  //exports:[EmplistComponent]
})
export class EmpDashboardModule { }

