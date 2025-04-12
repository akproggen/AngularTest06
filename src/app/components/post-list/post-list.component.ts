import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IPost } from '../../model/interface/post';





@Component({
  selector: 'app-post-list',
  imports: [PostComponent, CommonModule, FormsModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {

  dataPosts:Array<IPost> = [];
  currentDate: Date = new Date();
  currentTime: string = '';
  inputName: string = '';
  inputMail: string = ''; 
  inputPwd: string = '';
  inputInfo: string = '';
  constructor() { }

  async ngOnInit() 
  {
    this.dataPosts = await fetch('./assets/data/posts.json').then(res => res.json());
  
    if (this.dataPosts.length == 0) {
      console.log('Keine Posts vorhanden');
      
    }else{
      for (let i = 0; i < this.dataPosts.length; i++) {
        console.log(this.dataPosts[i].name);
      }

    }
  } 

  async addPost() {
    let post:IPost = {
      name: this.inputName,
      img: '',
      text: this.inputMail,
      time: this.currentTime
    }
    this.dataPosts.push(post);
    console.log(this.dataPosts);
  }

}
