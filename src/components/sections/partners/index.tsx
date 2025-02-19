import { UiContainer } from "@ui"
import { PartnersTypes } from "./types"
import "./style.scss"

function PartnersApp({ logos }: PartnersTypes): JSX.Element {
  return (
    <section className="partners">
      <UiContainer>
        {logos.map((logo) => (
          <img
            className="partners-logo"
            src={logo.image}
            alt="logo"
            key={logo.image}
          />
        ))}
      </UiContainer>
    </section>
  )
}

export default PartnersApp
