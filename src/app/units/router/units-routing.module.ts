import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUnitComponent } from '../component/add-unit/add-unit.component';
import { CategoryComponent } from '../component/category/category.component';
export const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: 'list',
        component: CategoryComponent,
      },
      {
        path: 'add',
        component: AddUnitComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsRoutingModule {}
