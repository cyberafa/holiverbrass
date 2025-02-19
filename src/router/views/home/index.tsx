// @ts-nocheck

import { UiLayout } from "@ui"
import { HomePage } from "@schemas"
import "./style.scss"

function HomeView() {
  return (
    <UiLayout page="home" settings={HomePage.settings}>
      {HomePage.sections.map((section) => (
        <section.component
          key={section.name}
          settings={section.settings}
          cards={section.cards}
          banners={section.banners}
          groups={section.groups}
        />
      ))}
    </UiLayout>
  )
}

export default HomeView
