import { UiContainer } from "@ui"
import { TextImageTypes } from "./types"
import "./style.scss"

function TextImageApp({ groups }: TextImageTypes): JSX.Element {
  return (
    <section className="text-image-group">
      <UiContainer>
        {groups.map((item) => (
          <div
            key={item.image}
            className={`text-image-item -${item.direction ?? "row"}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="text-image-image"
            />

            <h3 className="text-image-title">{item.title}</h3>
            <p className="text-image-text">{item.text}</p>
          </div>
        ))}
      </UiContainer>
    </section>
  )
}

export default TextImageApp
