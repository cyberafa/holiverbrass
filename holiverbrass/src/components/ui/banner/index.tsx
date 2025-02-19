import { UiButton } from "@ui"
import { UiBannerTypes } from "./types"
import "./style.scss"

function UiBanner({ props }: UiBannerTypes): JSX.Element {
  const bannersClass = ["banner"]

  if (props.textAlign) {
    bannersClass.push(`-${props.textAlign}`)
  }

  return (
    <div className={bannersClass.join(" ")}>
      <img src={props.image} alt="" className="banner-image" />
      <div className="banner-content">
        <h3 className="banner-title">{props.title}</h3>
        <p className="banner-text">{props.text}</p>
        <UiButton button={props.button} />
      </div>
    </div>
  )
}

export default UiBanner
