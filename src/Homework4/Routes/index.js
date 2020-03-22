import Cart from "~p/Cart";
import OrderForm from "~p/OrderForm";
import ResultScreen from "~p/ResultScreen";
import Products from "~p/Products";
import Product from "~p/Product";
import Error404 from "~p/Error404";

let routes = [
  {
    name: "cart",
    path: "/",
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
    path: "/product/:id",
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

export default routes;
export { routesMap };
