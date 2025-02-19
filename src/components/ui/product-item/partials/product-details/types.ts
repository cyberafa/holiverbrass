import React from "react"

type ProductDetailsTechFeatures = {
  main?: Array<string>
  optional?: Array<string>
  children?: React.ReactNode
  title?: string
}

type ProductDetails = {
  title: string
  techFeatures: ProductDetailsTechFeatures
  voltage?: string
  ampere?: string
  features?: Array<string>
  children?: React.ReactNode
}

export type ProductDetailsTypes = {
  details: Array<ProductDetails>
}
