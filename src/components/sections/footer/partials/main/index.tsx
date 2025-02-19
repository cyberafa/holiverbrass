import { isMobile } from "@hooks"
import { UiCompanyLogo, UiContainer, UiNavigation } from "@ui"
import { FooterMainTypes } from "./types"
import "./style.scss"

function FooterMain({ navigation }: FooterMainTypes): JSX.Element {
  return (
    <div className="footer-main">
      <UiContainer>
        <UiCompanyLogo footer />
        {!isMobile() && <UiNavigation navigation={navigation} />}
      </UiContainer>
    </div>
  )
}

export default FooterMain
