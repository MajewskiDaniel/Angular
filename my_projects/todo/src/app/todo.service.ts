import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  list$: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.http.get("/assets/list.json").subscribe(data => this.list$.next(data));
  }

  addTask(task) {
    const list = this.list$.value;
    this.list$.next([...list, task]);
  }
}
