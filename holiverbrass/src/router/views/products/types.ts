import { CardGroupApp, VideoApp, BannersApp } from "@sections"
import { Page } from "@types"
import { VideoTypes } from "@/components/sections/video/types"
import { BannersTypes } from "@/components/sections/banners/types"
import { CardGroupTypes } from "@/components/sections/card-group/types"

type ProductListSections =
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
    } & BannersTypes)

export type ProductListTypes = Page & {
  sections: Array<ProductListSections>
}
