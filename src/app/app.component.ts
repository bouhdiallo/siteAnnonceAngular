import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  prix1:number = 850;
  prix2:number = 550;
  prix3:number = 450;
  message: string = "";



  onAffiche(arg: string){
    return this.message= "Merci d'avoir voté pour cette article: " + arg; 
  }
  liste = [
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
}

