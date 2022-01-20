import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent {

  @Input() childmessage : any;
  title : any;
  description : any;

  constructor(private noteservice:NoteService,public dialog: MatDialog) { }
  
  openDialog(noteObjet:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '650px',
      data: noteObjet,
    });

    dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
      this.title = result;
      this.description = result;
    });
  }

  messageRecievedFromNote(e:any){
    console.log(e);
  }
}
