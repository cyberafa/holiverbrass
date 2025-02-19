import { VideoTypes } from "./types"
import "./style.scss"

function VideoApp({ settings }: VideoTypes): JSX.Element {
  const videoUrl = `https://www.youtube.com/embed/${settings.video}`

  return (
    <section className="video">
      <img src={settings.background} className="video-background" />
      <iframe src={videoUrl} className="video-player" />
    </section>
  )
}

export default VideoApp
