import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/NoteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createNoteForm!: FormGroup;
  submitted = false;
  display = true;

  constructor(private formbuilder: FormBuilder,private noteservice:NoteService) { }

  ngOnInit(): void {
    this.createNoteForm = this.formbuilder.group({
      title: [''],
      description: [''],
    })
  }
  get f() { return this.createNoteForm.controls; }

  takenote(){
    this.display=false;
  }
    onSubmit() {
    this.submitted = true;

    
    if (this.createNoteForm.valid) {
      let data={
        title: this.createNoteForm.value.title,
        description: this.createNoteForm.value.description,
      }
      this.noteservice.createNote(data).subscribe((response:any)=>{
        console.log(response)
      })
      
    }
    else{
      console.log("Form is invalid")
    }
  }
}
