import { IconTypes } from "./types"
import "./style.scss"

function UiIcon(icon: IconTypes): JSX.Element {
  const iconClass = [
    "ui-icon",
    `fa-${icon.brand ? "brands" : icon.type}`,
    `fa-${icon.name}`,
  ]

  return <i className={iconClass.join(" ")} />
}

UiIcon.defaultProps = {
  type: "solid",
}

export default UiIcon
