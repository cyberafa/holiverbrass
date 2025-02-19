import { UiBannerProps } from "@/components/ui/banner/types"
import { UiGridCellProps } from "@/components/ui/grid-cell/types"

export type BannersBanner = UiBannerProps & UiGridCellProps

export type BannersTypes = {
  banners: Array<BannersBanner>
}
