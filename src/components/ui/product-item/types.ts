import { ProductDetailsTypes } from "./partials/product-details/types"

export type ProductItem = {
  image: string
  name: string
  features?: Array<string>
} & ProductDetailsTypes

export type ProductItemTypes = {
  product: ProductItem
}
