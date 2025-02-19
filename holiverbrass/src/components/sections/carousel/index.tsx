import { Splide, SplideSlide } from "@splidejs/react-splide"
import { UiContainer } from "@ui"
import { UiCarouselTypes } from "./types"
import "@splidejs/splide/dist/css/splide.min.css"
import "./style.scss"

function CarouselApp({ settings, slides }: UiCarouselTypes): JSX.Element {
  return (
    <>
      <section className="simple-list">
        <UiContainer>
          <div className="simple-list-item">
            <h3 className="simple-list-title">Missão</h3>
            <ul>
              <li>
                Proporcionar segurança e qualidade com os melhores produtos do
                segmento.
              </li>
              <li>
                Inspirar confiança e credibilidade, pulverizando nossa marca.
              </li>
            </ul>
          </div>
          <div className="simple-list-item">
            <h3 className="simple-list-title">Visão</h3>
            <ul>
              <li>
                Produzir com responsabilidade socioambiental, pontuando fatores
                que são primordiais para um desenvolvimento sustentável.
              </li>
              <li>
                Ser uma empresa que inspira seus colaboradores a crescerem junto
                com a marca.
              </li>
              <li>
                Atuar responsavelmente no meio ambiente onde estamos inseridos.
              </li>
              <li>
                Valorizar e respeitar as relações com nossos clientes internos,
                externos e fornecedores.
              </li>
              <li>Fazer a diferença com a alta tecnologia fabril.</li>
            </ul>
          </div>
          <div className="simple-list-item">
            <h3 className="simple-list-title">Valores</h3>
            <ul>
              <li>
                Inovação: Processos e tecnologias inovadoras agregam qualidade e
                confiança aos produtos Holiverbrass.
              </li>
              <li>
                Sustentabilidade: Políticas de preservação do meio ambiente
                fazem parte da nossa filosofia.
              </li>
              <li>
                Responsabilidade Social: Acreditamos na importância das ações
                voltadas para a sociedade em que vivemos.
              </li>
              <li>
                Capacitação: O desenvolvimento dos nossos colaboradores é um
                fator primordial para o fortalecimento da marca.
              </li>
            </ul>
          </div>
        </UiContainer>
      </section>
      <section className="carousel">
        <h3 className="carousel-title">{settings.title}</h3>
        <div className="carousel-wrapper">
          <UiContainer>
            <Splide
              options={{
                arrows: settings?.desktopArrows,
                pagination: settings?.desktopPagination,
                autoplay: true,
                interval: 4000,
                speed: 1500,
                rewind: true,
                rewindSpeed: 1500,
                breakpoints: {
                  1023: {
                    pagination: settings?.mobilePagination,
                    arrows: settings?.mobileArrows,
                  },
                },
              }}
            >
              {slides.map((slide) => (
                <SplideSlide key={slide.image}>
                  <img src={slide.image} className="carousel-image" />
                </SplideSlide>
              ))}
            </Splide>
          </UiContainer>
        </div>
      </section>
    </>
  )
}

export default CarouselApp
