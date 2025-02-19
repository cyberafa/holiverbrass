// @ts-nocheck

import { UiLayout } from "@ui"
import { ProductsPage } from "@schemas"
import "./style.scss"

function ProductsView(): JSX.Element {
  return (
    <UiLayout page="products">
      {ProductsPage.sections.map((section) => (
        <section.component key={section.name} list={section.list} />
      ))}
    </UiLayout>
  )
}

export default ProductsView
