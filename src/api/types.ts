export type Material = 'Knit' | 'Leather' | 'Synthetic';
export type Brands =
  | 'Adidas'
  | 'Nike'
  | 'Puma'
  | 'New Balance'
  | 'Under Armour'
  | 'Mizuno';

export interface BootInfo {
  brand: Brands;
  material: Material;
  midcut: boolean;
  model: string;
  msrp: number;
  releaseDate: string;
  weight: number;
  id: string;
}

export interface BootReview {
  body: string;
  id: string;
  stars: number;
  user: string;
}
