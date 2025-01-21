export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  size?: "pequeño" | "mediano" | "grande";
}

export interface OrderItem extends MenuItem {
  quantity: number;
}
