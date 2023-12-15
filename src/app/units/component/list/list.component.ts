import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Units } from '../../config/interface/unit';
import { ConnectionPipe } from '../../config/pipe/connection';
import { TagsPipe } from '../../config/pipe/tags';
import { UnitsService } from '../../units.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class UnitsListComponent implements OnInit {
  ELEMENT_DATA: Units[] = [];
  displayedColumns: string[] = [
    'select',
    'icon',
    'title',
    'status',
    'IMEI',
    'tags',
    'LTP',
    'star',
  ];
  dataSource = new MatTableDataSource<Units>(this.ELEMENT_DATA);
  selection = new SelectionModel<Units>(true, []);

  constructor(
    private unit: UnitsService,
    private router: Router,
    private statusPipe: ConnectionPipe,
    private tagPipe: TagsPipe
  ) {}

  ngOnInit(): void {
    this.fetchUnits();
  }

  fetchUnits() {
    this.unit.fetchUnits().subscribe((units) => {
      const x = units.map((un: Units) => ({
        id: un.id,
        icon: un.icon,
        title: un.title,
        status: this.statusPipe.transform(un.status),
        IMEI: un.IMEI,
        tags: this.tagPipe.transform(un.tags),
        LTP: un.LTP,
      }));
      this.dataSource = new MatTableDataSource(x);
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Units): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  addUnit() {
    this.router.navigate(['/units/add']);
  }
}
