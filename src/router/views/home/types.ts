import { CardGroupApp, VideoApp, BannersApp } from "@sections"
import { Page } from "@types"
import { VideoTypes } from "@/components/sections/video/types"
import { BannersTypes } from "@/components/sections/banners/types"
import { CardGroupTypes } from "@/components/sections/card-group/types"

/* type HomeSections =
  | ({
      name: string
      component: typeof CardGroupApp
      
    } & CardGroupTypes)
  | ({
      name: string
      component: typeof VideoApp
    } & VideoTypes)
  | ({
      name: string
      component: typeof BannersApp
    } & BannersTypes) */

type ComponentTypes = typeof BannersApp | typeof VideoApp | typeof CardGroupApp

type SectionsTypes = VideoTypes & BannersTypes & CardGroupTypes

type HomeSections = SectionsTypes & {
  name: string
  component: ComponentTypes
}

export type HomeTypes = Page & {
  sections: Array<any>
}
