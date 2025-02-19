import { UiContainer } from "@ui"
import FooterAuxSocials from "./socials"
import FooterAuxContact from "./contact"
import { FooterAuxTypes } from "./types"
import "./style.scss"

function FooterAux({ socials, contact }: FooterAuxTypes): JSX.Element {
  return (
    <div className="footer-aux">
      <UiContainer>
        <FooterAuxSocials socials={socials} />
        <FooterAuxContact contact={contact} />
      </UiContainer>
    </div>
  )
}

export default FooterAux
