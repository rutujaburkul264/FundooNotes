import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
    this.getallnote()
  }
  getallnote(){
    this.noteservice.getNote().subscribe((response:any)=>{
      console.log(response)
    })
  }
}