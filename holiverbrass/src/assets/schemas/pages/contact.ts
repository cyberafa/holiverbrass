import { ImagesGridApp, ButtonsGroupApp, MapApp, ListApp } from "@sections"
import { ContactTypes } from "@/router/views/contact/types"
import lafonte from "@images/logo-lafonte.jpg"
import giussani from "@images/logo-giussani.png"
import unitech from "@images/logo-unitech.png"
import zini from "@images/logo-zini.jpg"
import lm from "@images/logo-lm.jpg"
import mazurczak from "@images/logo-mazurczak.jpg"

const ContactPage = {
  settings: {
    title: "Parceiros",
  },
  sections: [
    {
      name: "images-grid",
      component: ImagesGridApp,
      images: [
        {
          src: lafonte,
        },
        {
          src: giussani,
        },
        {
          src: unitech,
        },
        {
          src: zini,
        },
        {
          src: lm,
        },
        {
          src: mazurczak,
        },
      ],
    },
    {
      name: "list",
      component: ListApp,
      settings: {
        title: "Sobre a Holiverbrass",
      },
      list: [
        {
          text: "Holiverbrass indústria de retificadores LTDA",
          bold: true,
        },
        {
          text: "Fone PABX: 51 3599.1060",
          bold: false,
        },
        {
          text: "Endereço: Rodovia RS 239, Nº 217 - Bairro Amaral Ribeiro - Sapiranga / RS",
          bold: false,
        },
        {
          text: "CEP: 93813-050",
          bold: false,
        },
      ],
    },
    {
      name: "buttons-group",
      component: ButtonsGroupApp,
      buttons: [
        {
          label: "Setor comercial",
          href: "#",
        },
        {
          label: "Assistência técnica",
          href: "#",
        },
        {
          label: "Compras Nacional/Inter.",
          href: "#",
        },
      ],
    },
    {
      name: "map",
      component: MapApp,
      props: {
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13870.34637935138!2d-51.025554!3d-29.644748000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc82faed8269a01df!2sDWC%20Metal%C3%BArgica!5e0!3m2!1spt-BR!2sbr!4v1672885961373!5m2!1spt-BR!2sbr",
      },
    },
  ],
}

export default ContactPage
