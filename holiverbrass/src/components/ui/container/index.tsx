import { UiContainerTypes } from "./types"
import "./style.scss"

function UiContainer({ children }: UiContainerTypes): JSX.Element {
  return (
    <div className="ui-container">
      <div className="ui-container-wrapper">{children}</div>
    </div>
  )
}

export default UiContainer
