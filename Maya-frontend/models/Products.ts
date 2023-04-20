export interface Product {
  _id: string
  productName: string
  price: number
  gender: string
  sort: string
  searchQuery: string
  description: string
  image: {
    asset: {
      _ref: string
    }
  }
  slug: {
    current: string
  }
}
