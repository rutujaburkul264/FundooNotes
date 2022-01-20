import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './Components/authentication.guard';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { ForgetEmailComponent } from './Components/forget-email/forget-email.component';
import { GetAllArchiveComponent } from './Components/get-all-archive/get-all-archive.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { GetAllRemindersComponent } from './Components/get-all-reminders/get-all-reminders.component';
import { IconsComponent } from './Components/icons/icons.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';


const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component:RegistrationComponent},
  {path: 'login', component:LoginComponent,},
  {path: 'forgetEmail', component:ForgetEmailComponent},
  {path: 'resetpassword/:token', component:ResetPasswordComponent},
  
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  
  children:[
    {path:'', redirectTo:"/dashboard/notes", pathMatch:'full' },
    {path:'notes', component:GetAllNotesComponent},
    {path:'archiveNotes',component:GetAllArchiveComponent},
    {path:'trash',component:TrashNotesComponent},
    {path:'reminders',component:GetAllRemindersComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
