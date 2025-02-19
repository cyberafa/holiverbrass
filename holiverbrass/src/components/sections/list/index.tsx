import { UiContainer, UiTextStyle } from "@ui"
import { ListTypes } from "./types"
import "./style.scss"

function ListApp({ settings, list }: ListTypes) {
  return (
    <section className="list">
      <UiContainer>
        <h3 className="list-title">{settings.title}</h3>
        <ul className="list-group">
          {list.map((text) => (
            <li className="list-item" key={text.text}>
              <UiTextStyle style={{ uppercase: true, bold: text.bold }}>
                {text.text}
              </UiTextStyle>
            </li>
          ))}
        </ul>
      </UiContainer>
    </section>
  )
}

export default ListApp
