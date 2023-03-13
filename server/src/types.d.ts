export type Role = 'admin' | 'premium' | 'user'

export interface Product {
  id: number
  titlte: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnails: string
  images: any[]
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  role: Role
  cart?: any[]
  likes?: any[]
}
