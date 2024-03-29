export interface Car {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: {
    number: number;
    unit: string;
  };
  fuelType: string;
  pictureUrl: string;
}

export interface Manufacturer {
  name: string;
  models: Array<{ name: string }>;
}

export interface SearchFilters {
  manufacturer?: string | null;
  color?: string | null;
  sort?: "desc" | "asc";
  page?: number;
}

export interface SearchResult {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}
