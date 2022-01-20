import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token')
  }

  createNote(req: any) {
    console.log("inside note service", req);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.post('notes/addNotes', req, true, header)
  }
  getNote() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.get('notes/getNotesList', true, header)
  }
  DeleteNote(id: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.post('notes/trashNotes', id, true, header)
  }
  ArchiveNote(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.post('notes/archiveNotes', data, true, header)
  }
  UpdateNote(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.post('notes/updateNotes', data, true, header)
  }
  colorNote(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.post('notes/changesColorNotes', data, true, header)
  }
  getallArchive() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.get('notes/getArchiveNotesList', true, header)
  }
  getAllTrashList(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpservice.get('notes/getTrashNotesList', true, header)
  }
  
}

