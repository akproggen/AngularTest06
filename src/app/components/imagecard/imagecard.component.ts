import { Component } from '@angular/core';
import { IBild } from '../../model/interface/bild';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagecard',
  imports: [CommonModule],
  templateUrl: './imagecard.component.html',
  styleUrl: './imagecard.component.scss'
})
export class ImagecardComponent {
  bilderDaten: IBild[] = [];
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<IBild[]>('./assets/data/bilderDatenKoeppe.json').subscribe(
      (data) => {
        this.bilderDaten = data;
        console.log(this.bilderDaten); // Geparste Daten ausgeben
      },
      (error) => {
        console.error('Fehler beim Laden der JSON-Datei:', error);
      }
    );
  }
  }