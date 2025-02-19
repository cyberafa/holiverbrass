import { ButtonProps } from "@/components/ui/button/types"

type BannerCarouselSettings = {
  desktopArrows?: boolean
  mobileArrows?: boolean
  desktopPagination?: boolean
  mobilePagination?: boolean
}

type BannerCarouselSlides = {
  image: string
  mobileImage: string
  title: string
  text: string
  side?: "left" | "right"
  subtitle?: string
  line?: boolean
  lineColor?: string
  button?: ButtonProps
}

export type BannerCarouselTypes = {
  slides: Array<BannerCarouselSlides>
  settings?: BannerCarouselSettings
}
