export type Beverage = {
  _id?: string
  name: string
  price: number
  image: string
  category: string
  description: string
}

export type CartItem = {
  id: string
  _id?: string
  name: string
  price: number
  priceWithCustomization: number
  image: string
  category: string
  description: string
  quantity: number
  amount?: number
  customization?: {
    milk?: string
    flavours?: string
    sweeteners?: string
    specialInstructions?: string
  }
}
