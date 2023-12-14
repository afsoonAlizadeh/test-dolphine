import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsOutletComponent } from './component/units-outlet/units-outlet.component';
import { AddUnitComponent } from './component/add-unit/add-unit.component';
import { UnitsRoutingModule } from './router/units-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitsListComponent } from './component/list/list.component';
import { CategoryComponent } from './component/category/category.component';

@NgModule({
  declarations: [
    UnitsOutletComponent,
    CategoryComponent,
    UnitsListComponent,
    AddUnitComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    UnitsRoutingModule,
  ],
})
export class UnitsModule {}
