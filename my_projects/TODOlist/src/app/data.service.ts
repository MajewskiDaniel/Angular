import { Injectable } from "@angular/core";
import TasksJson from "../assets/tasks.json";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public tasksData = TasksJson;
  constructor() {}

  loadData() {}
}
