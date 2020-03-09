import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TaskComponent } from "./task/task.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TaskComponent, NotFoundComponent, TaskItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
