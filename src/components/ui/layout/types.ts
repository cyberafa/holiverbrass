import { ButtonProps } from "../button/types"

type LayoutDescription = {
  paragraph: string
  bold?: boolean
}

type LayoutSettings = {
  title: string
  description?: Array<LayoutDescription>
  button?: ButtonProps
}

export type LayoutTypes = {
  page: string
  children: React.ReactNode
  settings?: LayoutSettings
}
