import { UiButton } from "@ui"
import { BannerCarouselContentTypes } from "./types"
import "./style.scss"

function BannerCarouselContent({
  slide,
}: BannerCarouselContentTypes): JSX.Element {
  return (
    <div className="banner-carousel-content">
      <div className="banner-carousel-content-item">
        {slide.title && (
          <h1 className="banner-carousel-content-title">{slide.title}</h1>
        )}
        {slide.subtitle && (
          <span className="banner-carousel-content-subtitle">
            {slide.subtitle}
          </span>
        )}
        {slide.line && <span className="banner-carousel-content-line" />}
        <p className="banner-carousel-content-text">{slide.text}</p>
        {slide.button && <UiButton button={slide.button} />}
      </div>
    </div>
  )
}

export default BannerCarouselContent
