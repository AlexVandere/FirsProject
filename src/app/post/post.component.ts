import { outputAst } from '@angular/compiler';
import { ChangeDetectionStrategy, Component,EventEmitter,Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class PostComponent implements OnInit{

  @Input('post') posts:post | undefined
  ngOnInit() {
    
  }


  
}
