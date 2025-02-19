export type ButtonProps = {
  label: string
  to?: string
  href?: string
  icon?: string
  image?: string
  uppercase?: boolean
  sm?: boolean
  download?: boolean
}

export type ButtonTypes = {
  button: ButtonProps
  onClick?: () => void
}
