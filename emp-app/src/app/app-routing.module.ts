import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard/emp-dashboard.component';
import { RegisterComponent } from './empLogin/register/register.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'emplist', loadChildren: () => import('./emp-dashboard/emp-dashboard.module').then(m => m.EmpDashboardModule) },
{path:'empdashboard/:id',component:EmpDashboardComponent},
{path:'login', loadChildren: () => import('./empLogin/authmodule.module').then(m => m.AuthmoduleModule) },
{path:'registerform', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
