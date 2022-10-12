import { Component,Input, OnInit } from '@angular/core';
import { post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{
  @Input('post') post:post | undefined

  
}
