import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CollectionsHomeComponent } from "./collections-home/collections-home.component";

const routes: Routes = [{ path: "", component: CollectionsHomeComponent }];
// lazy loading last step is to ^^ remove above path
// (this is relative path from app-routing.module[there is already path to /collections])

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {}
