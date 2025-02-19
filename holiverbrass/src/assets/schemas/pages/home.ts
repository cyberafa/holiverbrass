import { CardGroupApp, VideoApp, TextImageApp, BannersApp } from "@sections"
import { HomeTypes } from "@/router/views/home/types"
import cabos from "@images/cabos.png"
import centrifugas from "@images/centrifugas.png"
import bombas from "@images/bombas.png"
import resistencias from "@images/resistencias.png"
import retificadores from "@images/retificadores.png"
import jumbo from "@images/jumbo.png"
import videoBanner from "@images/video-banner.jpg"
import catalogo1 from "@images/catalogo-1.jpg"
import catalogo2 from "@images/catalogo-2.jpg"
import catalogo3 from "@images/catalogo-3.jpg"
import bannerBig from "@images/banner-big.png"
import bannerSmall from "@images/banner-small.png"
import retificadorAzul from "@images/rectifier-blue.png"
import ferramentas from "@images/tools.png"
import catalogo from "../../../../public/folder.pdf"

const HomePage = {
  settings: {
    title: "Buscamos constantemente estar sempre à frente",
    description: [
      {
        paragraph:
          "Investindo em inovações e trazendo ao mercado produtos que atendam as necessidades dos clientes com segurança, qualidade e tecnologia.",
        bold: false,
      },
    ],
    button: {
      label: "Ver mais",
      to: "empresa",
    },
  },
  sections: [
    {
      name: "card-group",
      component: CardGroupApp,
      settings: {
        grid: true,
      },
      cards: [
        {
          image: cabos,
          text: "Cabos Catódicos",
          uppercase: false,
        },
        {
          image: centrifugas,
          text: "Centrífugas",
          uppercase: false,
        },
        {
          image: bombas,
          text: "Bombas Filtro",
          uppercase: false,
        },
        {
          image: resistencias,
          text: "Resistências",
          uppercase: false,
        },
        {
          image: retificadores,
          text: "Retificadores",
          uppercase: false,
        },
        {
          image: jumbo,
          text: "Jumbo",
          uppercase: true,
        },
      ],
    },
    {
      name: "video",
      component: VideoApp,
      settings: {
        background: videoBanner,
        video: "xxNADK0kFZk",
      },
    },
    {
      name: "text-image",
      component: TextImageApp,
      groups: [
        {
          title: "Peças de reposição",
          text: "Temos todas as peças de reposição e material de consumo, à pronta entrega, para os equipamentos que fabricamos e comercializamos.",
          image: retificadorAzul,

          direction: "column",
        },
        {
          title: "Assistência técnica",
          text: "Estamos aptos a fazer consertos e prestar assistência técnica, sempre que necessário, em nossa sede ou na sede do cliente.",
          image: ferramentas,
          direction: "column",
        },
      ],
    },
    {
      name: "card-group",
      component: CardGroupApp,
      cards: [
        {
          image: catalogo1,
          button: {
            label: "Boletos",
            href: "https://api.whatsapp.com/send?phone=5551982062704",
          },
          text: "Consulte a 2ª via do seu boleto.",
        },
        {
          image: catalogo2,
          button: {
            label: "Catálogo",
            href: catalogo,
          },
          text: "Veja nosso catálogo completo",
        },
        {
          image: catalogo3,
          button: {
            label: "Parceiros",
            to: "contato",
          },
          text: "Conheça parceiros da Holiverbrass",
        },
      ],
    },
    {
      name: "banners",
      component: BannersApp,
      banners: [
        {
          image: bannerBig,
          title: "Assistência técnica",
          text: "Fale AGORA via WhatsApp",
          textAlign: "right",
          size: 8,
          button: {
            label: "Clique aqui",
            href: "https://api.whatsapp.com/send?phone=5551982062703",
          },
        },
        {
          image: bannerSmall,
          title: "Fale conosco",
          text: "Fale com nosso setor comercial",
          textAlign: "center",
          size: 4,
          button: {
            label: "Falar agora",
            href: "https://api.whatsapp.com/send?phone=5551982062707",
          },
        },
      ],
    },
  ],
}

export default HomePage
