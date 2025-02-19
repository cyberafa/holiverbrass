import { UiGridGroupProps } from "./types"
import "./style.scss"

function UiGridGroup(props: UiGridGroupProps): JSX.Element {
  return <div className="ui-grid-group">{props.children}</div>
}

export default UiGridGroup
