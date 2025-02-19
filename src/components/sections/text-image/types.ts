type TextImageGroups = {
  text: string
  image: string
  direction?: "column" | "row"
  title?: string
}

export type TextImageTypes = {
  groups: Array<TextImageGroups>
}
