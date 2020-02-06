import { Injectable, EventEmitter } from "@angular/core";
import { NewsData } from "./models/news-data";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    {
      id: 1,
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper id odio ut vulputate. Morbi convallis euismod pharetra. Morbi dictum pulvinar ligula in rhoncus. Donec porta viverra diam nec auctor. Nulla porttitor venenatis ultrices. Ut tristique, lorem ut vulputate tempor. Ut a lectus augue. Quisque vitae nisi purus. Suspendisse ullamcorper mauris ut nibh bibendum, vitae varius ipsum tempor. Praesent eu mi ex. Maecenas quis est sapien. Nam dapibus mattis tincidunt. Sed vitae gravida felis, nec lacinia leo. Pellentesque nunc ipsum, finibus ac arcu sed, tempor porttitor metus. Ut porttitor viverra ante, non sodales urna sodales non. Curabitur laoreet neque eget.",
      rank: 1,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/05/22/12/sunset-1801720_960_720.jpg"
    },
    {
      id: 2,
      title: "News 2",
      content:
        "Ut a lectus augue. Quisque vitae nisi purus. Suspendisse ullamcorper mauris ut nibh bibendum, vitae varius ipsum tempor. Praesent eu mi ex. Maecenas quis est sapien. Nam dapibus mattis tincidunt. Sed vitae gravida felis, nec lacinia leo. Pellentesque nunc ipsum, finibus ac arcu sed, tempor porttitor metus. Ut porttitor viverra ante, non sodales urna sodales non. Curabitur laoreet neque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rank: 2,
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/09/01/20/05/island-3647522_960_720.jpg"
    },
    {
      id: 3,
      title: "Something 3",
      content:
        "Fusce ac congue tellus. Nullam consequat libero sed neque tincidunt, vitae maximus eros rutrum. Pellentesque nunc urna, pellentesque sit amet nisi et, iaculis consequat turpis. Nam posuere et elit sit amet ultricies. In hac habitasse platea dictumst. Mauris blandit, leo eu viverra semper, neque purus scelerisque ante, non vestibulum urna diam et velit. Suspendisse cursus nibh sit amet ornare tincidunt. Ut posuere ac quam a ultrices. Nullam ac turpis quis ligula posuere dictum nec et nibh. Mauris vitae malesuada lorem.",
      rank: 4,
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/01/16/15/09/landscape-4770871_960_720.jpg"
    }
  ];

  getNewsList(): NewsData[] {
    return this.news.slice();
  }

  removeItem(id: number) {
    const newsIdx = this.news.findIndex(news => news.id === id);
    this.news.splice(newsIdx, 1);
    this.onChange.emit();
  }

  addItem(title: string, content: string, imageUrl: string = "") {
    const id = Math.max(...this.news.map(i => i.id)) + 1;
    const news: NewsData = {
      id,
      title,
      content,
      imageUrl,
      rank: 0
    };
    this.news.push(news);
    this.onChange.emit();
  }

  voteNews(id: number, rankUp: boolean) {
    const newsIdx = this.news.findIndex(news => news.id === id);
    if (newsIdx !== -1) {
      const news = this.news[newsIdx];
      const rank = news.rank;
      news.rank = rankUp ? rank + 1 : rank - 1;
    }
  }
}
