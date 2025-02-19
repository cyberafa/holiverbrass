import { UiCard, UiContainer } from "@ui"
import { CardGroupTypes } from "./types"
import "./style.scss"

function CardGroupApp({ settings, cards }: CardGroupTypes): JSX.Element {
  const cardGroupClass = ["card-group"]

  if (settings?.grid) {
    cardGroupClass.push("-grid")
  }

  return (
    <section className={cardGroupClass.join(" ")}>
      <UiContainer>
        {cards.map((card) => (
          <UiCard card={card} />
        ))}
      </UiContainer>
    </section>
  )
}

CardGroupApp.defaultProps = {
  settings: {
    grid: false,
  },
}

export default CardGroupApp
