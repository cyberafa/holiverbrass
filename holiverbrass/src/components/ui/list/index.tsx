import { ListTypes } from "./types"
import "./style.scss"

function UiListApp({ list }: ListTypes) {
  return (
    <ul className="ui-list">
      {list.map((item) => (
        <li key={item.name} className="ui-list-item">
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default UiListApp
