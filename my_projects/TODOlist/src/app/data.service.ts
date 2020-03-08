import { Injectable } from "@angular/core";
import TasksJson from "../assets/tasks.json";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public tasksData = TasksJson.sort((a, b) => {
    let dateA: any = new Date(a.date),
      dateB: any = new Date(b.date);
    return dateA - dateB;
  });
  constructor() {}

  loadData() {}
}
