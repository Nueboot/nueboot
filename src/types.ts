export type Material = 'Knit' | 'Leather' | 'Synthetic';

export type Brands =
  | 'Adidas'
  | 'Nike'
  | 'Puma'
  | 'New Balance'
  | 'Under Armour'
  | 'Mizuno';

export interface Boot {
  brand: Brands;
  material: Material;
  midcut: boolean;
  model: string;
  msrp: number;
  releaseDate: string;
  weight: number;
}
