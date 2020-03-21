import Cart from "~p/Cart";
import OrderForm from "~p/OrderForm";
import ResultScreen from "~p/ResultScreen";

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
  }
];

let routesMap = {};

routes.forEach(route => {
  routesMap[route.name] = route.path;
});

export default routes;
export { routesMap };
