import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import {
  AccessAction,
  AccessType,
  Action,
  levelAcess,
} from '../../config/interface/role';
import { RoleService } from '../../role.service';

export class TodoItemNode {
  items!: TodoItemNode[];
  name!: string;
  id!: number;
  productId!: string;
  parentId!: string;
  isChecked?: boolean;
}

export class TodoItemFlatNode {
  id!: number;
  name!: string;
  level!: number;
  expandable!: boolean;
  isChecked?: boolean;
}

@Component({
  selector: 'app-access-level',
  templateUrl: './access-level.component.html',
  styleUrls: ['./access-level.component.scss'],
})
export class AccessLevelComponent implements OnInit {
  @Input() contetnt: any[] = [];
  @Input() set changeTab(value: boolean) {
    this.accessActions = [];
  }

  @Output() getActionIds = new EventEmitter<levelAcess[]>();

  searchKey: string = '';
  actions: Action[] = [];
  accessActions: AccessAction[] = [];
  accessType: AccessType[] = [
    { _id: '1', name: 'دسترسی انتشار', value: ['100', '200', '300'] },
    { _id: '2', name: 'دسترسی ویرایش', value: ['200', '300'] },
    { _id: '3', name: 'دسترسی مشاهده', value: ['300'] },
  ];
  actionIds: levelAcess[] = [];

  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  checklistSelection = new SelectionModel<TodoItemFlatNode>(
    true /* multiple */
  );

  constructor(private role: RoleService) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  ngOnInit(): void {
    this.fetchActions();
  }

  get filterCat() {
    return this.contetnt.filter((cat) => cat.name.includes(this.searchKey));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.filterCat) {
      this.dataSource.data = this.filterCat;
    }
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.items;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.name === node.name
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.id = node.id;
    flatNode.name = node.name;
    flatNode.isChecked = node.isChecked;
    flatNode.level = level;
    flatNode.expandable = !!node.items?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  todoLeafItemSelectionToggle(node: TodoItemFlatNode, e: any): void {
    const x = this.actions.filter((c) => +c.category === +node.id);
    const access: AccessAction = {
      _id: node.id.toString(),
      name: node.name,
      items: x,
    };
    if (e.checked) {
      this.actionIds.push({ _id: node.id.toString(), level: [] });
      this.accessActions.push(access);
    } else {
      this.actionIds = this.actionIds.filter(
        (action) => action._id !== node.id.toString()
      );
      this.accessActions = this.accessActions.filter(
        (a) => a._id !== access._id
      );
    }
    this.getActionIds.emit(this.actionIds);
  }

  trackById(index: number) {
    return this.contetnt ? this.contetnt[index] : 0;
  }

  levelAccess(value: string[], id: string) {
    this.actionIds.find((action) => {
      if (action._id === id) action.level = value;
    });
    this.getActionIds.emit(this.actionIds);
  }

  fetchActions() {
    this.role.fetchActions().subscribe((actions) => {
      this.actions = actions;
    });
  }
}
