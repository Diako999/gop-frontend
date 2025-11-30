export interface Product {
  id: number
  seller: number
  category: number | null
  name: string
  description: string
  price: number
  stock: number
  is_active: boolean
  created_at: string
  average_rating: number
}
