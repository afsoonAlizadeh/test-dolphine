import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleOutletComponent } from './component/role-outlet/role-outlet.component';
import { AddRoleComponent } from './component/add-role/add-role.component';
import { CategoryComponent } from './component/category/category.component';
import { RoleListComponent } from './component/list/list.component';
import { RoleRoutingModule } from './router/role-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccessLevelComponent } from './component/access-level/access-level.component';

@NgModule({
  declarations: [
    RoleOutletComponent,
    AddRoleComponent,
    CategoryComponent,
    RoleListComponent,
    AccessLevelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    RoleRoutingModule,
  ],
})
export class RoleModule {}
