// @ts-nocheck

import { UiLayout } from "@ui"
import { ContactPage } from "@schemas"

function ContactView() {
  return (
    <UiLayout page="contact" settings={ContactPage.settings}>
      {ContactPage.sections.map((section) => (
        <section.component
          key={section.name}
          images={section.images}
          settings={section.settings}
          list={section.list}
          buttons={section.buttons}
          props={section.props}
        />
      ))}
    </UiLayout>
  )
}

export default ContactView
