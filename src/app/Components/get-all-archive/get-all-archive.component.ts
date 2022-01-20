import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';

@Component({
  selector: 'app-get-all-archive',
  templateUrl: './get-all-archive.component.html',
  styleUrls: ['./get-all-archive.component.scss']
})
export class GetAllArchiveComponent implements OnInit {
  archiveNotes: any;

  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
    this.getArchives();
  }
  getArchives() {
    this.noteservice.getallArchive().subscribe((response: any) => {
      console.log(response.data.data)
      this.archiveNotes = response.data.data
      this.archiveNotes.reverse()
    })
  }
}
