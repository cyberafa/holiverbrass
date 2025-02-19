type LinkProps = {
  href?: string
  to?: string | object
}

export type LinkTypes = {
  children: React.ReactNode
  props?: LinkProps
  className?: string
}
