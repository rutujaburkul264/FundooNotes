import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  
  @Input() CardObject: any;
  @Output() changeColorOfNote = new EventEmitter<any>();

  colors = [
    {
      name: 'Lime', bgColorValue: '#B3E283'
    },
    {
      name: 'Pink', bgColorValue: '#FFEBCC'
    },
    {
      name: 'Yellow', bgColorValue: '#FFFEA9'
    },
    {
      name: 'Light Green', bgColorValue: '#E4E978'
    },
    {
      name: 'Teal', bgColorValue: '#CDF0EA'
    }
  ];

  constructor(private noteservice:NoteService,private dataservice:DataService) { }
  
  ngOnInit(): void {
    
  }
  deleteNote(){
    let req = {
      noteIdList: [this.CardObject.id],
      isDeleted: true,
    }
    
    this.noteservice.DeleteNote(req).subscribe((response:any)=>{
      console.log("Note is deleted")
      console.log(response)
      this.dataservice.sendData(response)
    })
    window.location.reload();
  }
  archiveNote(){
    let req = {
      noteIdList: [this.CardObject.id],
      isArchived: true,
    }
    this.noteservice.ArchiveNote(req).subscribe((response:any)=>{
      console.log("Note is archieved")
      console.log(response)
      this.dataservice.sendData(response)
    })
    window.location.reload();
  }

  changeColor(noteColor:any){
    // console.log(this.CardObject);
    
    this.CardObject.noteColor = noteColor;
    console.log('color', noteColor);
    let data = {
      color: noteColor,
      noteIdList: [this.CardObject.id]
    }
    
    this.noteservice.colorNote(data).subscribe(
      (response: any) => this.changeColorOfNote.emit(noteColor)
    )
  }
}