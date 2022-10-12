import { Component } from '@angular/core';
export interface post{

  tittel : string,
  text:string,
  id?:number
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  posts:post[] =[
    { tittel:'как дела',text:'ето я ',id :12},
    { tittel:'Привет',text:'ето он ',id :2}
    ]
    updatepost(post:post){
     this.posts.unshift(post )
  
   
    }
}


