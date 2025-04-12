import { Component, Input, OnInit} from '@angular/core';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

 
  @Input() wert:string = '';
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() time: string = '';
  @Input() text: string = '';
 


  constructor() { 
   

  }


  ngOnInit(): void {
    

  }
}



