import { ReactNode } from "react";

export interface UserContextProps {
  loading: boolean;
  users: UserProps[] | null;
  token: TokenProps | null;
  profile: ProfileProps | null;
  setToken: (value: TokenProps | null) => void;
  login: (mail: string, password: string) => void;
  logout: () => void;
  create: (alias: string, mail: string, password: string) => void;
  getUsers: () => void;
  updateRole: (id: string, role: string) => Promise<boolean>;
  error: ErrorProps | null;
  setError: (error: ErrorProps | null) => void;
  updateAlias: (alias: string) => Promise<boolean>;
  updateMail: (mail: string) => Promise<boolean>;
  updatePassword: (password: string) => Promise<boolean>;
  saveProfile: (
    birth_date: string,
    weight: string,
    sex: string
  ) => Promise<boolean>;
  deleteProfile: () => Promise<boolean>;
}

export interface FoodContextProps {
  pageFoods: PageProps | null;
  food: FoodNutrientsProps | null;
  error: ErrorProps | null;
  getFoodsByPage: (page: number) => Promise<void>;
  search: (term: string) => Promise<void>;
  getById: (id: string) => Promise<void>;
  setError: (value: ErrorProps | null) => void;
}

export interface FoodProps {
  id: string;
  description: string;
}

export interface FoodNutrientsProps {
  id: string;
  description: string;
  category: CategoryProps;
  moisture: ValueProps;
  energy: ValueProps;
  protein: ValueProps;
  lipids: ValueProps;
  cholesterol: ValueProps;
  carbohydrate: ValueProps;
  dietary_fiber: ValueProps;
  ash: ValueProps;
  calcium: ValueProps;
  magnesium: ValueProps;
  manganese: ValueProps;
  phosphorus: ValueProps;
  iron: ValueProps;
  sodium: ValueProps;
  potassium: ValueProps;
  copper: ValueProps;
  zinc: ValueProps;
  retinol: ValueProps;
  re: ValueProps;
  era: ValueProps;
  thiamin: ValueProps;
  riboflavin: ValueProps;
  pyridoxine: ValueProps;
  niacin: ValueProps;
  vitamin_c: ValueProps;
}

export interface ProductContextProps {
  products: ProductNutrientsProps[];
  error: ErrorProps | null;
  setError: (value: ErrorProps | null) => void;
  create: (
    description: string,
    serving_size: number,
    serving_size_unit: string,
    quantity_per_serving: number,
    quantity_per_serving_unit: string,
    energy: number | null,
    protein: number | null,
    carbohydrate: number | null,
    sugar: number | null,
    dietary_fiber: number | null,
    total_fat: number | null,
    saturated_fat: number | null,
    trans_fat: number | null,
    calcium: number | null,
    sodium: number | null
  ) => Promise<boolean>;
  update: (
    id: string,
    description: string,
    serving_size: number,
    serving_size_unit: string,
    quantity_per_serving: number,
    quantity_per_serving_unit: string,
    energy: number | null,
    protein: number | null,
    carbohydrate: number | null,
    sugar: number | null,
    dietary_fiber: number | null,
    total_fat: number | null,
    saturated_fat: number | null,
    trans_fat: number | null,
    calcium: number | null,
    sodium: number | null
  ) => Promise<boolean>;
  remove: (id:string) => Promise<boolean>;
  search: (term:string) => Promise<ProductNutrientsProps[]>;
}

export interface EatContextProps {
  eatProducts: EatProductProps[];
  eatFoods: EatFoodProps[];
  products: ProductNutrientsProps[];
  foods: FoodProps[];
  error: ErrorProps | null;
  setError: (value: ErrorProps | null) => void;
  createProduct: (product:string, date:string, quantity:number) => Promise<boolean>;
  createFood: (food:string, date:string, quantity:number) => Promise<boolean>;
  removeProduct: (id:string) => Promise<boolean>;
  removeFood: (id:string) => Promise<boolean>;
  date: Date | null;
  setDate: (value:Date | null) => void;
  searchFood: (term:string) => Promise<boolean>;
  searchProduct: (term:string) => Promise<boolean>;
}

export interface ProductNutrientsProps {
  id: string;
  description: string;
  serving_size: number;
  serving_size_unit: string;
  quantity_per_serving: number;
  quantity_per_serving_unit: string;
  energy: number | null;
  protein: number | null;
  carbohydrate: number | null;
  sugar: number | null;
  dietary_fiber: number | null;
  total_fat: number | null;
  saturated_fat: number | null;
  trans_fat: number | null;
  calcium: number | null;
  sodium: number | null;
}

export interface PageProps {
  items: FoodProps[];
  total: number;
  page: number;
  pagesize: number;
}

export interface CategoryProps {
  id: string;
  name: string;
}

export interface ValueProps {
  label: string;
  value: number | null;
  unit: string;
}

export interface ErrorProps {
  error: string;
}

export interface ProviderProps {
  children: ReactNode;
}

export interface UserProps {
  id: string;
  alias: string;
  mail: string;
  role: string;
}

export interface TokenProps extends UserProps {
  token: string;
}

export interface ProfileProps {
  birth_date: string;
  weight: string;
  sex: string;
}

export interface EatProductProps {
  id: string;
  date: string;
  quantity: number; 
  description: string;
  serving_size: number; 
  serving_size_unit: string; 
  quantity_per_serving: number;
  quantity_per_serving_unit: string;
  energy: number | null;
  protein: number | null; 
  carbohydrate: number | null;
  sugar: number | null;
  dietary_fiber: number | null;
  total_fat: number | null;
  saturated_fat: number | null;
  trans_fat: number | null;
  calcium: number | null;
  sodium: number | null;
}

export interface EatFoodProps {
  id: string;
  date: string;
  quantity: number; 
  description: string;
  energy: number | null;
  protein: number | null; 
  carbohydrate: number | null;
  dietary_fiber: number | null;
  calcium: number | null;
  sodium: number | null;
}