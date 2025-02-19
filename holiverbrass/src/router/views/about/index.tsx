// @ts-nocheck

import { UiLayout } from "@ui"
import { AboutPage } from "@schemas"

function AboutView() {
  return (
    <UiLayout page="about" settings={AboutPage.settings}>
      {AboutPage.sections.map((section) => (
        <section.component
          key={section.name}
          settings={section.settings}
          slides={section.slides}
          icons={section.icons}
        />
      ))}
    </UiLayout>
  )
}

export default AboutView
