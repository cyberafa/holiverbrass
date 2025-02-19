import { ButtonProps } from "../button/types"

export type UiBannerProps = {
  image: string
  title: string
  text: string
  textAlign?: string
  button: ButtonProps
}

export type UiBannerTypes = {
  props: UiBannerProps
}
