import { Splide, SplideSlide } from "@splidejs/react-splide"
import BannerCarouselContent from "./partials/content"
import { BannerCarouselTypes } from "./types"
import "@splidejs/splide/dist/css/splide.min.css"
import "./style.scss"

function BannerCarouselApp({
  settings,
  slides,
}: BannerCarouselTypes): JSX.Element {
  function slideClass(side?: "left" | "right") {
    const sides = {
      left: "-left",
      right: "-right",
    }

    const contentSide = sides[side ?? "left"]

    return `banner-carousel-item${` ${contentSide}`}`
  }

  return (
    <section className="banner-carousel">
      <Splide
        className="banner-carousel-carousel"
        options={{
          arrows: settings?.desktopArrows,
          pagination: settings?.desktopPagination,
          autoplay: true,
          interval: 4000,
          speed: 1500,
          rewind: true,
          rewindSpeed: 1500,
          breakpoints: {
            1023: {
              pagination: settings?.mobilePagination,
              arrows: settings?.mobileArrows,
            },
          },
        }}
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.title} className={slideClass(slide.side)}>
            <picture>
              <source srcSet={slide.mobileImage} media="(max-width: 1024px)" />
              <source srcSet={slide.image} media="(min-width: 1024px)" />
              <img className="img" src={slide?.image || slide?.mobileImage} />
            </picture>
            <BannerCarouselContent slide={slide} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}

BannerCarouselApp.defaultProps = {
  settings: {
    desktopArrows: false,
    mobileArrows: false,
    desktopPagination: true,
    mobilePagination: true,
  },
}

export default BannerCarouselApp
