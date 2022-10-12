import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent  {
 @Output () onAdd:EventEmitter<post> =new EventEmitter<post>() //працюэ зовнi
 @ViewChild("tittelInpute")
  child!: ElementRef;
 
  tittel=''
  text=''
  addPost() {
    if (this.text.trim() &&  this.tittel.trim()) {
      const post: post = {
        tittel: this.tittel,
        text: this.text
      }

      
      this.onAdd.emit (post)
      this.text = this.tittel = ''
    }
   
  }
  FocusTittel (){
   this.child?.nativeElement.focus()
   console.log(this.child)
  }
}
