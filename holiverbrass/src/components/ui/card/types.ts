import { ButtonProps } from "../button/types"

type CardSettings = {
  image: string
  text: string
  button?: ButtonProps
  uppercase?: boolean
}

export type CardTypes = {
  card: CardSettings
}
