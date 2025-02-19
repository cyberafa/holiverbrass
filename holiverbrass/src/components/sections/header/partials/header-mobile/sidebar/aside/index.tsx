import AsideHeader from "./header"
import AsideBody from "./body"
import AsideFooter from "./footer"
import { HeaderAsideTypes } from "./types"
import "./style.scss"

function HeaderAside({ navigation }: HeaderAsideTypes): JSX.Element {
  return (
    <aside className="sidebar">
      <AsideHeader />
      <AsideBody navigation={navigation} />
      <AsideFooter />
    </aside>
  )
}

export default HeaderAside
