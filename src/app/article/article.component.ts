import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
// titreArticle: string =  "titre de l'article";
// prixArticle: number = 12;
// textAltImg: string= "titre alternative de l'image";
// urlImg: string = "assets/bike-909690_1280.jpg"; 
TotaLike: number = 0;
comment: string= "ceci est un commentaire"        
// dispo: boolean = false;            

@Input() titreArticle: string;
@Input() prixArticle: number;
@Input() description: string;
@Input() urlImg: string;
@Input() textAltImg: string;
@Input() dispo: boolean;




@Output() info = new EventEmitter<string>();

   constructor(){}
  ngOnInit(): void {
  }
  onlike(){
    this.TotaLike++;
    this.info.emit(this.titreArticle);
  }

}
