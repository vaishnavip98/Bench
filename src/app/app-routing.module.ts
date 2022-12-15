import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BenchComponent} from './components/bench/bench-list/bench-list.component';

const routes: Routes = [
  {
    path: '',
    component: BenchComponent
  },
  {
    path: 'bench',
    component: BenchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
