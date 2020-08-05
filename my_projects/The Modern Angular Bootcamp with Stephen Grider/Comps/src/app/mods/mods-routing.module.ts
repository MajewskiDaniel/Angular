import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModsHomeComponent } from "./mods-home/mods-home.component";
import { ModalComponent } from "./modal/modal.component";

const routes: Routes = [
  {
    path: "",
    component: ModsHomeComponent,
    children: [{ path: "", component: ModalComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModsRoutingModule {}
