import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
      new Article(
        'Angular 2',
        'http://angular.io',
        10
      ),
      new Article(
        'Angular 2',
        'http://angular.io',
        10
      ),
      new Article(
        'Angular 2',
        'http://angular.io',
        10
      )
    ]
  }


  addArticle(title: HTMLInputElement, link: HTMLInputElement) :boolean {
    console.log(`${title.value} ${link.value}`);
    this,this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
