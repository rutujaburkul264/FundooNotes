import { Component, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  trashNotes: any;
  notecard: any;
  
  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
    this.getTrashList();
  }
  getTrashList(){
    this.noteservice.getAllTrashList().subscribe((response: any) => {
      console.log(response.data.data)
      this.trashNotes = response.data.data
      this.trashNotes.reverse()
      
      // console.log(this.notesArray)
    })
  }
}
