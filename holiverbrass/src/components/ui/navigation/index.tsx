import { UiLink, UiTextStyle } from "@ui"
import { NavigationTypes } from "./types"
import "./style.scss"

function UiNavigation({ navigation }: NavigationTypes) {
  return (
    <nav className="ui-navigation">
      {navigation.map((nav) => (
        <UiTextStyle style={{ uppercase: true }} key={nav.slug}>
          <UiLink props={{ to: nav.slug }}>{nav.slug}</UiLink>
        </UiTextStyle>
      ))}
    </nav>
  )
}

export default UiNavigation
