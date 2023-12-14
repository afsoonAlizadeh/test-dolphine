import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from '../component/add-role/add-role.component';
import { RoleListComponent } from '../component/list/list.component';
import { RoleOutletComponent } from '../component/role-outlet/role-outlet.component';
export const routes: Routes = [
  {
    path: '',
    component: RoleOutletComponent,
    children: [
      {
        path: 'list',
        component: RoleListComponent,
      },
      {
        path: 'add',
        component: AddRoleComponent,
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
export class RoleRoutingModule {}
