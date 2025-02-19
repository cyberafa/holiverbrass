import "./style.scss"
import { UiGridCellTypes } from "./types"

function UiGridCell({ props, children }: UiGridCellTypes): JSX.Element {
  const cellClass = ["ui-grid-cell"]

  if (props.size) {
    cellClass.push(`-size-${props.size}`)
  }

  if (props.lg) {
    cellClass.push(`-lg-size-${props.lg}`)
  }

  return <div className={cellClass.join(" ")}>{children}</div>
}

export default UiGridCell
