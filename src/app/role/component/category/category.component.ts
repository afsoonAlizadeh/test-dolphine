import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../config/interface/role';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Output() selectedPanel = new EventEmitter<string>();
  tab?: Products;
  products: Products[] = [];

  constructor(private role: RoleService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.role.fetchProducts().subscribe((products) => {
      this.products = products;
    });
  }

  trackById(index: number) {
    return this.products ? this.products[index] : 0;
  }

  tabChanged(event: any) {
    this.tab = this.products.find((p) => p.name === event.tab.textLabel);
    this.selectedPanel.emit(this.tab?._id);
  }
}
