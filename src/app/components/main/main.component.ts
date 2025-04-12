import { Component } from '@angular/core';
import { PersonListComponent } from "../person-list/person-list.component";
import { RolesComponent } from "../roles/roles.component";
import { IBild } from '../../model/interface/bild';
import { HttpClient } from '@angular/common/http';
import { ImagecardComponent } from "../imagecard/imagecard.component";
import { DesignationComponent } from "../designation/designation.component";

@Component({
  selector: 'app-main',
  imports: [RolesComponent, ImagecardComponent, DesignationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


}
