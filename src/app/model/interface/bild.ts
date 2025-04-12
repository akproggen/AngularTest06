export interface IBild {
    id: string;
    creater: string;
    titel: string;
    beschreibung: string;
    jahr: number;
    groesseX: number;
    groesseY: number;
    material: string;
    startgebot: number;
    bildUrl: string;
    listeAllerGebote?: Array<{
      date: string;
      gebot: string;
      kontaktinfo: string;
    }>;
  }