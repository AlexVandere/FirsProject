import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
export interface post{

  tittel : string,
  text:string,
  id?:number
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit{
 
  posts:post[] =[
    { tittel:'как дела',text:'ето я ',id :12},
    { tittel:'Привет',text:'ето он ',id :2}
    ]
    ngOnInit(): void {
      setTimeout(()=>{
        console.log('timeout')
        this.posts[0]={
          tittel:'change',
          text:'change2',
          id:22
        }
        
      },5000)
    }
    updatepost(posts:post){
     this.posts.unshift(posts )
  
   
    }
}


