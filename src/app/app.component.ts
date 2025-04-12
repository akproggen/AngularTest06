import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PersonComponent } from './components/person/person.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StuffComponent } from "./components/stuff/stuff.component";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { ApiStuffComponent } from './components/api-stuff/api-stuff.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { RolesComponent } from './components/roles/roles.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RolesComponent, HeaderComponent, CommonModule, RouterOutlet,  FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app6';
  currentDate: Date = new Date();
  currentTime: string = '';
  wert01: string = 'DDD';
  selectedState:string='';
  inputType: string = 'checkbox';

  constructor() {
    this.currentTime= this.currentDate.getHours() + ":" + this.currentDate.getMinutes() + ":" + this.currentDate.getSeconds();

  }

  async ngOnInit() 
  {


  }

  showWelcomeAlert1() {
    alert('Willkommen auf meiner Seite'); 
  }

  showWelcomeAlert2(message:string) {
    alert('Willkommen auf meiner Seite' + message); 
  }

}
