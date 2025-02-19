import { ImagesGridApp, ListApp, ButtonsGroupApp, MapApp } from "@sections"
import { Page } from "@types"
import { ButtonsGroupTypes } from "@/components/sections/buttons-group/types"
import { ImagesGridTypes } from "@/components/sections/images-grid/types"
import { ListTypes } from "@/components/sections/list/types"
import { MapTypes } from "@/components/sections/map/types"

type ContactSections =
  | ({
      name: string
      component: typeof ImagesGridApp
    } & ImagesGridTypes)
  | ({
      name: string
      component: typeof ListApp
    } & ListTypes)
  | ({
      name: string
      component: typeof ButtonsGroupApp
    } & ButtonsGroupTypes)
  | ({
      name: string
      component: typeof MapApp
    } & MapTypes)

export type ContactTypes = Page & {
  sections: Array<ContactSections>
}
