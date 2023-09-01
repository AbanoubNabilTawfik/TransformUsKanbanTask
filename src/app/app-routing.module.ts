import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeTasksComponent } from './home-tasks/home-tasks.component';
const routes: Routes = [
  

  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  { path: '', component: HomeComponent,
  children: [
    { path: '', component: HomeTasksComponent },
    { path: 'profile', component: ProfileComponent },
  ],
  
},
{path:'**',component:HomeComponent},



  //{ path: '**', component: ErrorNotFoundComponent },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
