import { Pipe, PipeTransform } from "@angular/core";
import { NewsData } from "./models/news-data";

@Pipe({
  name: "rating"
})
export class RatingPipe implements PipeTransform {
  transform(newsList: NewsData[]) {
    const newList = newsList.concat().sort((a, b) => b.rank - a.rank);
    return newList;
  }
}
