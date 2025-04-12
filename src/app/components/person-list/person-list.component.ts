import { Component } from '@angular/core';
import { PersonComponent } from '../person/person.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IPerson } from '../../model/interface/person';





@Component({
  selector: 'app-person-list',
  imports: [PersonComponent, CommonModule, FormsModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})


export class PersonListComponent {
  dataPerson:Array<IPerson> = [];
  inputName: string = '';
  inputMail: string = ''; 
  inputPwd: string = '';
  inputInfo: string = '';

  constructor() { }

  async ngOnInit() 
  {
    this.dataPerson = await fetch('./assets/data/person.json').then(res => res.json());
  
    if (this.dataPerson.length == 0) {
      console.log('Keine Personen vorhanden');
      
    }else{
      for (let i = 0; i < this.dataPerson.length; i++) {
        console.log(this.dataPerson[i].name);
      }

    }
  } 

}
