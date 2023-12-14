import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CategoryTree,
  levelAcess,
  Products,
} from '../../config/interface/role';
import { UnitsService } from '../../units.service';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss'],
})
export class AddUnitComponent {
  products: Products[] = [];
  categoryTree: CategoryTree[] = [];
  tab?: Products;
  changeTab = false;
  form: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
    active: new FormControl<boolean>(false),
    actionIds: new FormControl<levelAcess[]>([]),
  });

  constructor(private unit: UnitsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchCategoryTree();
  }

  get categoryContent() {
    return this.categoryTree.filter((c) => c.productId === this.tab?._id);
  }

  fetchProducts() {
    this.unit.fetchProducts().subscribe((products) => {
      this.products = products;
    });
  }

  fetchCategoryTree() {
    this.unit.fetchCategoriesTree().subscribe((categoryTree) => {
      this.categoryTree = this.convertFlatToTree(categoryTree);
    });
  }

  convertFlatToTree(array: any[]) {
    let map: any = {};
    for (let i = 0; i < array.length; i++) {
      let obj = array[i];
      obj.items = [];

      map[obj.id] = obj;
      obj.parentId = obj.parentId === 'null' ? '' : obj.parentId;
      let parent = obj.parentId || '-';
      if (!map[parent]) {
        map[parent] = {
          items: [],
        };
      }
      map[parent].items.push(obj);
    }

    return map['-'].items;
  }

  selectedPanel(panelId: string) {
    this.changeTab = !this.changeTab;
    this.tab = this.products.find((p) => p._id === panelId);
  }

  getActionIds(actionId: levelAcess[]) {
    this.form.get('actionIds')?.setValue(actionId);
  }

  goTolist() {
    this.router.navigate(['/units/list']);
  }

  submit() {
    debugger;
    this.unit.setRole(this.form.value).subscribe();
  }
}
