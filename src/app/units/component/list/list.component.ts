import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Role } from '../../config/interface/role';
import { UnitsService } from '../../units.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class UnitsListComponent implements OnInit {
  roles: Role[] = [];
  dataSource: any;
  displayedColumns: string[] = [
    'edit',
    'actionIds',
    'active',
    'description',
    'name',
    '#',
  ];

  constructor(private unit: UnitsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUnits();
  }

  fetchUnits() {
    this.unit.fetchRole().subscribe((units) => {
      this.dataSource = new MatTableDataSource(units);
    });
  }

  addUnit() {
    this.router.navigate(['/units/add']);
  }
}
