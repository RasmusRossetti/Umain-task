export interface ProductProps {
  products: {
    _id: string
    productName: string
    price: number
    gender: string
    sort: string
    searchQuery: string
    slug: {
      current: string
    }
    image: {
      asset: {
        _ref: string
      }
    }
  }[]
  searchQuery: string
}
