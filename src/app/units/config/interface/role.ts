export interface Role {
  name: string;
  description: string;
  active: boolean;
  actionIds: string[];
}

export interface Products {
  _id: string;
  name: string;
}

export interface CategoryTree {
  id: string;
  productId: string;
  name: string;
  parentId: string;
  items?: CategoryTree[];
}

export interface Action {
  _id: string;
  product: Products;
  name: string;
  category: string;
  level: number;
}

export interface AccessAction {
  _id: string;
  name: string;
  items: Action[];
}

export interface AccessType {
  _id: string;
  name: string;
  value: string[];
}

export interface levelAcess {
  _id: string;
  level: string[];
}
