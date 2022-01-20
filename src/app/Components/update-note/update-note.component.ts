import { Component, Inject, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})

export class UpdateNoteComponent implements OnInit {
  title:any;
  description:any;

  constructor(private noteservice: NoteService,public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('data from dialog',this.data)
    this.title=this.data.title
    this.description=this.data.description
  }

  Update() {
    let data = {
      noteId: this.data.id,
      title: this.title,
      description: this.description,
    }
    this.noteservice.UpdateNote(data).subscribe((response:any)=>{
      console.log("Note is updated")
      console.log(response)
      
    })
    window.location.reload();
    this.dialogRef.close();
  }
}
