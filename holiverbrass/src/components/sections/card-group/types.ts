import { ButtonProps } from "@/components/ui/button/types"

export type CardGroupSettings = {
  grid: boolean
}

export type CardGroupCards = {
  image: string
  text: string
  uppercase?: boolean
  button?: ButtonProps
}

export type CardGroupTypes = {
  cards: Array<CardGroupCards>
  settings?: CardGroupSettings
}
