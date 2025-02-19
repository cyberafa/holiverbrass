import { UiNavigation } from "@ui"
import { AsideBodyTypes } from "./types"
import "./style.scss"

function AsideBody({ navigation }: AsideBodyTypes): JSX.Element {
  return (
    <div className="sidebar-body">
      <section className="sidebar-section">
        <UiNavigation navigation={navigation} />
      </section>
    </div>
  )
}

export default AsideBody
