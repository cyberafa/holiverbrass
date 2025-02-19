import { UiProductItem } from "@ui"
import { ProductShowcaseTypes } from "./types"
import "./style.scss"

function ProductShowcaseApp({ products }: ProductShowcaseTypes) {
  return (
    <div className="product-showcase">
      {products.map((product) => (
        <UiProductItem
          v-for="product in products"
          key={product.name}
          product={{
            name: product.name,
            image: product.image,
            features: product.features,
            details: product.details,
          }}
        />
      ))}
    </div>
  )
}

export default ProductShowcaseApp
