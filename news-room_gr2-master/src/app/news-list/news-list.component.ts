import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";
import { NewsData } from "../models/news-data";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  private news: NewsData[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();

    this.newsService.onChange.subscribe(() => this.loadNews());
  }

  loadNews() {
    this.news = [];

    setTimeout(() => {
      this.news = this.newsService.getNewsList();
    }, 500);
  }

  trackByFn(idx, item: NewsData) {
    return item.id;
  }
}
