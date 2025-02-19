import { MapTypes } from "./types"
import "./style.scss"

function MapApp({ props }: MapTypes): JSX.Element {
  return (
    <section className="map">
      <iframe className="map-iframe" src={props.map} />
    </section>
  )
}

export default MapApp
