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
}

