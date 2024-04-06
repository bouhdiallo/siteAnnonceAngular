import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
titreArticle: string =  "titre de l'article";
prixArticle: number = 12;
textAltImg: string= "titre alternative de l'image";
urlImg: string = "assets/bike-909690_1280.jpg";
TotaLike: number = 0;

   constructor(){}
  ngOnInit(): void {
  }
  onlike(){
    this.TotaLike++;
  }

}
