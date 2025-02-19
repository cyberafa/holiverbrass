import HomeView from "./views/home";
import AboutView from "./views/about";
import ContactView from "./views/contact";
import ProductsView from "./views/products";

type RouteItem = {
  path: string;
  component: () => JSX.Element;
};
type Routes = {
  home: RouteItem;
  about: RouteItem;
  contact: RouteItem;
  products: RouteItem;
};

const defaultRoutes: Routes = {
  home: {
    path: "dist/",
    component: HomeView,
  },
  about: {
    path: "dist/empresa",
    component: AboutView,
  },
  contact: {
    path: "dist/contato",
    component: ContactView,
  },
  products: {
    path: "dist/produtos",
    component: ProductsView,
  },
};

export default defaultRoutes;
