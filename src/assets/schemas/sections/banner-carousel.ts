import { BannerCarouselTypes } from "@/components/sections/banner-carousel/types"
import banner1 from "@images/banner-1.png"
import bannerMobile1 from "@images/banner-mobile-1.png"
import banner2 from "@images/banner-2.png"
import bannerMobile2 from "@images/banner-mobile-2.png"

const bannerCarousel: BannerCarouselTypes = {
  settings: {
    mobileArrows: false,
    desktopArrows: false,
    desktopPagination: true,
    mobilePagination: false,
  },
  slides: [
    {
      image: banner1,
      mobileImage: bannerMobile1,
      title: "",
      subtitle: "Tecnologia de ponta italiana em parceria com GIUSSANI S.R.L.",
      line: false,
      text: "Holiverbrass é uma empresa especializada na projeção e fabricação de Retificadores para Máquinas de Galvanoplastia",
      side: "left",
      button: {
        label: "Ver mais",
        uppercase: true,
        href: "link externo",
      },
    },
    {
      image: banner2,
      mobileImage: bannerMobile2,
      title: "Líder nacional",
      subtitle: "no mercado da galvanoplastia",
      line: true,
      lineColor: "var(--secondary)",
      text: "Conheça nossa linha de retificadores",
      side: "right",
      button: {
        label: "Ver mais",
        uppercase: true,
        href: "link externo",
      },
    },
  ],
}

export default bannerCarousel
