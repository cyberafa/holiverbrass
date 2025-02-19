import { UiButton, UiContainer, UiTextStyle } from "@ui"
import { LayoutTypes } from "./types"
import "./style.scss"

function UiLayout({ page, settings, children }: LayoutTypes): JSX.Element {
  const mainClass = `${page} layout`

  return (
    <main id="main" className={mainClass}>
      {settings && (
        <UiContainer>
          <h2 className="layout-title">{settings?.title}</h2>
          {settings?.description && (
            <div className="layout-text">
              {settings?.description.map((paragraph) => (
                <UiTextStyle
                  key={paragraph.paragraph}
                  style={{ tag: "p", bold: paragraph.bold }}
                >
                  {paragraph.paragraph}
                </UiTextStyle>
              ))}
            </div>
          )}
          {settings?.button && <UiButton button={settings?.button} />}
        </UiContainer>
      )}
      <div className="layout-content">{children}</div>
    </main>
  )
}

export default UiLayout
