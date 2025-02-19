import { UiContainer } from "@ui"
import { ImagesGridTypes } from "./types"
import "./style.scss"

function ImagesGridApp({ images }: ImagesGridTypes): JSX.Element {
  return (
    <section className="images-grid">
      <UiContainer>
        {images.map((image) => (
          <img src={image.src} className="images-grid-image" />
        ))}
      </UiContainer>
    </section>
  )
}

export default ImagesGridApp
