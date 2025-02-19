import { UiMenuIconTypes } from "./types"
import "./style.scss"

function UiMenuIcon({ click }: UiMenuIconTypes): JSX.Element {
  return (
    <div className="ui-menu-icon" onClick={click}>
      <div className="ui-menu-icon-wrapper">
        <span className="ui-menu-icon-bar" />
        <span className="ui-menu-icon-bar" />
        <span className="ui-menu-icon-bar" />
      </div>
    </div>
  )
}

export default UiMenuIcon
