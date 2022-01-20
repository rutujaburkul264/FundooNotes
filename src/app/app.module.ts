import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgetEmailComponent } from './Components/forget-email/forget-email.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { IconsComponent } from './Components/icons/icons.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import { GetAllArchiveComponent } from './Components/get-all-archive/get-all-archive.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { GetAllRemindersComponent } from './Components/get-all-reminders/get-all-reminders.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetEmailComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    GetAllNotesComponent,
    DisplayNoteComponent,
    IconsComponent,
    UpdateNoteComponent,
    GetAllArchiveComponent,
    TrashNotesComponent,
    GetAllRemindersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatCardModule,
    MatSnackBarModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
