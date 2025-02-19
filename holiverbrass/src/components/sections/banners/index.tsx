import { UiBanner, UiGridGroup, UiGridCell, UiContainer } from "@ui"
import { BannersTypes } from "./types"

function BannersApp({ banners }: BannersTypes): JSX.Element {
  return (
    <section className="banners">
      <UiContainer>
        <UiGridGroup>
          {banners.map((banner) => (
            <UiGridCell
              key={banner.image}
              props={{ size: banner.size, lg: banner.lg }}
            >
              <UiBanner props={banner} key={banner.image} />
            </UiGridCell>
          ))}
        </UiGridGroup>
      </UiContainer>
    </section>
  )
}

export default BannersApp
