import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  @ViewChild('paginator') paginator!: MatPaginator;
  pageSize = [3, 6, 9];
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

  onSearchKeyUp(search: any) {
    let searchKey = search.target.value.toLowerCase().trim();
    this.dataSource.filter = searchKey;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fetchUnits() {
    this.unit.fetchUnits().subscribe((units) => {
      const unitList = units.map((un: Units) => ({
        id: un.id,
        icon: un.icon,
        title: un.title,
        status: this.statusPipe.transform(un.status),
        IMEI: un.IMEI,
        tags: this.tagPipe.transform(un.tags),
        LTP: un.LTP,
      }));
      this.dataSource = new MatTableDataSource(unitList);
      this.dataSource.paginator = this.paginator;
    });
  }

  // select
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
