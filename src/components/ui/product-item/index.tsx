import { useState } from "react"
import { UiButton } from "@ui"
import ProductDetails from "./partials/product-details"
import { ProductItemTypes } from "./types"
import "./style.scss"

function UiProductItem({ product }: ProductItemTypes) {
  const [isDetailShown, setShowDetails] = useState(false)

  function toggleDetails() {
    setShowDetails(!isDetailShown)
  }

  const productItemClass = ["product-item"]

  if (isDetailShown) {
    productItemClass.push("-open")
    document.body.classList.add("-modal-open")
  } else document.body.removeAttribute("class")

  return (
    <div className={productItemClass.join(" ")}>
      <img src={product.image} className="product-item-image" />
      <div className="product-item-content">
        <div className="product-item-info">
          <h2 className="product-item-name">{product.name}</h2>
          <ul className="product-item-features">
            {product.features?.map((feature) => (
              <li className="product-item-feature">{feature}</li>
            ))}
          </ul>
        </div>
        {isDetailShown && <ProductDetails details={product.details} />}
        <UiButton
          onClick={toggleDetails}
          button={{
            label: `${isDetailShown ? "Fechar detalhes" : "Saiba mais"}`,
          }}
        />
      </div>
    </div>
  )
}

export default UiProductItem
