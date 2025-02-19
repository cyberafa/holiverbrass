type UiCarouselSettings = {
  title?: string
  desktopArrows?: boolean
  desktopPagination?: boolean
  mobilePagination?: boolean
  mobileArrows?: boolean
}

type UiCarouselSlides = {
  image: string
}

export type UiCarouselTypes = {
  settings: UiCarouselSettings
  slides: Array<UiCarouselSlides>
}
