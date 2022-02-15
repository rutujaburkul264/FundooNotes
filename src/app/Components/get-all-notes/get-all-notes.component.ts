import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';
import { NoteService } from 'src/app/Services/NoteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  
  takenote: any;
  noteList: any;
  
  constructor(private noteservice: NoteService,private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.receivedData.subscribe((result:any)=>{
      console.log(result)
      this.getallnote();
    })
    this.getallnote();
  }
  messageRecieved(e:any) {
    console.log(e)
    this.getallnote()
  }

  getallnote() {
    this.noteservice.getNote().subscribe((response: any) => {
      console.log(response.data.data)
      this.takenote = response.data.data
      this.takenote.reverse()

      this.noteList = this.takenote.filter((data:any) => {
        console.log(data.isDeleted)
        return data.isDeleted === false && data.isArchived == false;
      })
      // console.log(this.noteList)
    })
  }
}