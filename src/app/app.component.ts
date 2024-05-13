import { Component,  OnInit} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // prix1:number = 850;
  // prix2:number = 550;
  // prix3:number = 450;
  message: string = "";
  liste;


constructor (private dataService: DataService) {

}

ngOnInit() {
  this.liste = this.dataService.listeArticles;

}

  onAffiche(arg: string){
    return this.message= "Merci d'avoir voté pour cette article: " + arg; 
  }
 
}

