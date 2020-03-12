import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ElementsHomeComponent } from "./elements-home/elements-home.component";

const routes: Routes = [{ path: "", component: ElementsHomeComponent }];
// lazy loading last step is to ^^ remove above path

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {}
