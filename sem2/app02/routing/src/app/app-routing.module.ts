import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TriangleComponent } from './triangle/triangle.component';


const routes: Routes = [
  {path: '', redirectTo: 'rectangle', pathMatch: 'full'},
  {path: 'circle', component: CircleComponent},
  {path: 'rectangle', component: RectangleComponent},
  {path: 'triangle', component: TriangleComponent},
  {path: '**', component: CircleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
