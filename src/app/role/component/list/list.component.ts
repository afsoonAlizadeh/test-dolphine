import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Role } from '../../config/interface/role';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class RoleListComponent implements OnInit {
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

  constructor(private role: RoleService, private router: Router) {}

  ngOnInit(): void {
    this.fetchRoles();
  }

  fetchRoles() {
    this.role.fetchRole().subscribe((roles) => {
      this.dataSource = new MatTableDataSource(roles);
    });
  }

  addRole() {
    this.router.navigate(['/roles/add']);
  }
}
