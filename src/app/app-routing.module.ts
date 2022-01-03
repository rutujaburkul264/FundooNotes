import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { ForgetEmailComponent } from './Components/forget-email/forget-email.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

const routes: Routes = [
  {path: '',   redirectTo: '/register', pathMatch: 'full'},
  {path: 'register', component:RegistrationComponent},
  {path: 'login', component:LoginComponent},
  {path: 'forgetEmail', component:ForgetEmailComponent},
  {path: 'resetpassword/:token', component:ResetPasswordComponent},
  
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'', redirectTo:"/dashboard/notes", pathMatch:'full' },
    {path:'notes', component:GetAllNotesComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
