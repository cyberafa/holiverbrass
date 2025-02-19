import { CarouselApp, SocialsApp } from "@sections"
import { AboutTypes } from "@/router/views/about/types"
import { DataGallery } from "@schemas"

const AboutPage = {
  settings: {
    title: "Buscamos constantemente estar sempre à frente",
    description: [
      {
        paragraph:
          "A Holiverbrass é líder no mercado nacional de galvanoplastia. Projetando e fabricando retificadores de corrente para todos os processos eletrolíticos, galvânico, tratamento de efluentes, camadas de cobre e outros metais, acima de cilindro para uso gráfico, laboratório, maquinas de fio continuo e  desenvolvimento de modelos personalizados.",
        bold: false,
      },
      {
        paragraph:
          "Localizada a 70 km de Porto Alegre, no município de Sapiranga / RS, conta hoje com uma planta fabril moderna e com tecnologia de ponta. Com milhares de clientes no Brasil e no Exterior, a Holiverbrass vem consolidando seu nome no mercado a mais de 70 anos na Itália e 18 anos no Brasil.",
        bold: true,
      },
      {
        paragraph:
          "Procurando atender a necessidade de seus clientes, priorizando a qualidade e durabilidade de seus produtos, através de investimentos constantes em tecnologia e capacitação profissional.",
        bold: false,
      },
      {
        paragraph:
          "É com o pensamento voltado para a satisfação de seus clientes, que a Holiverbrass além de retificadores passou a produzir bombas filtro, resistências elétricas, cabos catódicos, controles de nível e temperaturas, tambores rotativos, ultrassom, placas de resfriamento, centrifugas, desoleadoras, máquina para limpeza de parafusos, máquina para célula de Hull GALTEST.",
        bold: false,
      },
      {
        paragraph:
          "Tudo isso com comprometimento em uma gestão ambiental de melhor aproveitamento das matérias primas, objetivando a minimização dos resíduos gerados.",
        bold: false,
      },
      {
        paragraph:
          "A Holiverbrass está constantemente buscando estar sempre a frente, investimento em inovações e trazendo ao mercado, produtos para atender as necessidades dos nossos clientes com segurança, qualidade e tecnologia.",
        bold: true,
      },
    ],
  },
  sections: [
    {
      name: "Carousel",
      component: CarouselApp,
      settings: {
        title: "Galeria",
        desktopArrows: true,
        mobilePagination: true,
      },
      slides: DataGallery.slides,
    },
    {
      name: "Socials",
      component: SocialsApp,
      settings: {
        title: "Visite nossas redes sociais.",
      },
      icons: [
        {
          logo: "facebook-f",
          brand: true,
        },
        {
          logo: "instagram",
          brand: true,
        },
      ],
    },
  ],
}

export default AboutPage
