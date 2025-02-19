import { UiLink, UiButton, UiTextStyle } from "@ui"
import { CardTypes } from "./types"
import "./style.scss"

function UiCard({ card }: CardTypes): JSX.Element {
  return (
    <UiLink className="ui-card">
      <img className="ui-card-image" src={card.image} alt="" />
      <div className="ui-card-label">
        {card.button && <UiButton button={card.button} />}
        <UiTextStyle style={{ uppercase: card.uppercase }}>
          {card.text}
        </UiTextStyle>
      </div>
    </UiLink>
  )
}

export default UiCard
