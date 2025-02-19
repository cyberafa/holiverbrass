import { isMobile } from "@hooks"
import { UiContainer, UiCompanyLogo, UiNavigation } from "@ui"
import Mobile from "./partials/header-mobile"
import { HeaderTypes } from "./types"
import "./style.scss"

function HeaderApp({ navigation }: HeaderTypes): JSX.Element {
  return (
    <header className="header">
      <UiContainer>
        <UiCompanyLogo />
        {!isMobile() && <UiNavigation navigation={navigation} />}
        {isMobile() && <Mobile navigation={navigation} />}
      </UiContainer>
    </header>
  )
}

export default HeaderApp
