import { ButtonProps } from "@/components/ui/button/types"

type SlideTypes = {
  text: string
  title?: string
  subtitle?: string
  line?: boolean
  side?: "left" | "right"
  button?: ButtonProps
}

export type BannerCarouselContentTypes = {
  slide: SlideTypes
}
