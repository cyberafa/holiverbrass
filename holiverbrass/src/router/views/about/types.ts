import { CarouselApp, SocialsApp } from "@sections"
import { Page } from "@types"
import { UiCarouselTypes } from "@/components/sections/carousel/types"
import { SocialsTypes } from "@/components/sections/socials/types"

type AboutSections =
  | ({
      name: string
      component: typeof CarouselApp
    } & UiCarouselTypes)
  | ({
      name: string
      component: typeof SocialsApp
    } & SocialsTypes)

export type AboutTypes = Page & {
  sections: Array<AboutSections>
}
