import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticles = [
    {
      titreArticle: "moto",
      prixArticle: 800,
      description: "ceci est un moto ",
      urlImg: "../assets/moto.jpg",
      textAltImg: "un moto",
      dispo: false
    },
    {
      titreArticle: "casque",
      prixArticle: 50,
      description: "ceci est un casque",
      urlImg: "../assets/airpod.jpg",
      textAltImg: "un casque",
      dispo: true,
    },
    {
      titreArticle: "ordinateur",
      prixArticle: 1000,
      description: "ceci est un ordinateur",
      urlImg: "../assets/ordinateur.jpg",
      textAltImg: "un ordinateur",
      dispo: false,
    }
      ]

  constructor() { }
}
