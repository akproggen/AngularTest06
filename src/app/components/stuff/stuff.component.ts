import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PersonListComponent } from '../person-list/person-list.component';
import { PostListComponent } from '../post-list/post-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stuff',
  imports: [PersonListComponent, PostListComponent, CommonModule],
  templateUrl: './stuff.component.html',
  styleUrl: './stuff.component.scss'
})
export class StuffComponent {

  isLoaded: boolean = true;
  currrentComponent: string = '';

  constructor() {
 this.isLoaded = false;
  }

  setView(arg0: string) {
  
    console.log('setView', arg0);
    this.currrentComponent = arg0;
    console.log('setView', this.currrentComponent);
    throw new Error('Method not implemented.');
    
  }

}
