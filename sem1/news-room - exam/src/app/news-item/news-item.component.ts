import { Component, Input } from "@angular/core";
import { NewsData } from "../models/news-data";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.css"]
})
export class NewsItemComponent {
  @Input()
  public news: NewsData;

  @Input()
  public isOdd: boolean;

  constructor(private newsService: NewsService) {}

  remove() {
    this.newsService.removeItem(this.news.id);
  }

  onRankUp() {
    this.newsService.voteNews(this.news.id, true);
  }

  onRankDown() {
    this.newsService.voteNews(this.news.id, false);
  }
}
