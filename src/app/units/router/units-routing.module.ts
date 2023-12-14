import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUnitComponent } from '../component/add-unit/add-unit.component';
import { UnitsListComponent } from '../component/list/list.component';
export const routes: Routes = [
  {
    path: '',
    component: UnitsListComponent,
    children: [
      {
        path: 'list',
        component: UnitsListComponent,
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
