import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "./task";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public list: Task[] = [];
  // public tasksData = TasksJson.sort((a, b) => {
  //   let dateA: any = new Date(a.date),
  //     dateB: any = new Date(b.date);
  //   return dateA - dateB;
  // }); this was cut. it shouldn't be sorted it there. i need to do it in some other way

  constructor(private http: HttpClient) {}

  loadData() {
    this.http
      .get<Task[]>("/assets/tasks.json")
      .subscribe(list => (this.list = list));
  }

  get(id: number) {
    return this.list.find(task => task.id === id);
  }

  addTask(task: Task) {
    task.id = Math.max(...this.list.map(element => element.id)) + 1;
    this.list = [...this.list, task];
  }

  updateTask(task: Task) {
    const idx = this.list.findIndex(({ id }) => id === task.id);
    this.list = [...this.list.slice(0, idx), task, ...this.list.slice(idx + 1)];
  }

  removeTask(task: Task) {
    this.list = this.list.filter(element => element.id !== task.id);
  }
}
