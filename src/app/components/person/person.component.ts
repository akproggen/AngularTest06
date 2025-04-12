import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})

export class PersonComponent {


  @Input() name: string = '';
  @Input() mail: string = '';
  @Input() pwd: string = '';
  @Input() info: string = '';
  @Input() bla: string = 'bla';

  constructor() { }

  async ngOnInit(){


  }
}
