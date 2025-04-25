const ACCESS_TOKEN_HERE: string =
  "ADM4m7eyFgIX6PK0mkyt0W1wtE72PL6~1uByLZ~tbC8NLfK5VTZ0X1b502Pov8kdX0";

export interface Pagination {
  offset: number;
  limit: number;
}
export interface ListResponse<T> {
  matches_estimated: number;
  results: T[];
  total_count: number;
}

export enum enumPublicState {
  published = "published",
  unpublished = "unpublished",
}

export enum enumType {
  experience = "experience",
  product = "product",
  service = "service",
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Product {
  list_state: enumPublicState;
  list_price: number;
  is_dropshipping: boolean;
  photos: string[];
  experience_date: string;
  hide_price: boolean;
  created_at: string;
  contribution_margin: number;
  updated_at: number;
  is_free: boolean;
  name: string;
  currency: string;
  sold_out: boolean;
  experience_location: Location;
  experience_published_after: string;
  owner: string;
  hidden: boolean;
  type: enumType;
  id: string;
  queue_position: number;
}

export async function getProducts({
  offset,
  limit,
}: Pagination): Promise<ListResponse<Product>> {
  try {
    const response = await fetch(
      `https://orders-api.development.dubalu.io/public/referral/~DkblG4AAxdrV/catalogues/formatucuerpo/products/?offset=${offset}&limit=${limit}&type=product`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN_HERE}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
