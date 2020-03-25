import Cart from "~p/Cart";
import OrderForm from "~p/OrderForm";
import ResultScreen from "~p/ResultScreen";
import Products from "~p/Products";
import Product from "~p/Product";
import Error404 from "~p/Error404";

let routes = [
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
    path: "/",
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
