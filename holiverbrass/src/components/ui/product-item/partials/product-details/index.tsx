import { ProductDetailsTypes } from "./types"
import "./style.scss"
import rectifier from "@images/rectifier.png"

function ProductDetails({ details }: ProductDetailsTypes) {
  return (
    <div className="product-details">
      {details.map((detail) => (
        <div className="product-details-block">
          <h3 className="product-details-title">{detail.title}</h3>
          {detail.children ? (
            detail.children
          ) : (
            <div className="product-details-model">
              <img src={rectifier} alt="" />
              <div className="product-details-model-info">
                <div className="product-details-model-wrapper">
                  <span>Modelos:</span>
                  <span>{detail.ampere}</span>
                  <span>{detail.voltage}</span>
                </div>
                {detail.features && (
                  <ul className="product-details-model-features">
                    {detail.features.map((feature) => (
                      <li className="product-details-model-features-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
          <div className="product-details-tech-features">
            {detail.techFeatures.children && (
              <>
                <h3>{detail.techFeatures.title}</h3>
                {detail.techFeatures.children}
              </>
            )}
            {detail.techFeatures.main && (
              <div className="product-details-tech-features-main">
                <h3>Características técnicas</h3>
                <ul>
                  {detail.techFeatures.main.map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {detail.techFeatures.optional && (
              <div className="product-details-tech-features-optional">
                <h3>Opcionais</h3>
                <ul>
                  {detail.techFeatures.optional.map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductDetails
