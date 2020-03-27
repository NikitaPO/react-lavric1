import Cart from "~con/Cart";
import OrderForm from "~con/OrderForm";
import ResultScreen from "~con/ResultScreen";
import Products from "~con/Products";
import Product from "~con/Product";
import Error404 from "~con/Error404";

let routes = [
  {
    name: "home",
    path: "/",
    component: Products,
    exact: true
  },
  {
    name: "cart",
    path: "/cart",
    component: Cart,
    exact: true
  },
  {
    name: "order",
    path: "/order",
    component: OrderForm,
    exact: true
  },
  {
    name: "result",
    path: "/result",
    component: ResultScreen,
    exact: true
  },
  {
    name: "product",
    path: "/products/:id",
    component: Product,
    exact: true
  },
  {
    name: "products",
    path: "/products",
    component: Products,
    exact: true
  },
  {
    path: "*",
    component: Error404
  }
];

let routesMap = {};

routes.forEach(route => {
  if (route.hasOwnProperty("name")) {
    routesMap[route.name] = route.path;
  }
});

let urlBuilder = (name, params) => {
  if (!routesMap.hasOwnProperty(name)) {
    return null;
  }

  let url = routesMap[name];

  for (let key in params) {
    url = url.replace(":" + key, params[key]);
  }

  return url;
};

export default routes;
export { routesMap, urlBuilder };
