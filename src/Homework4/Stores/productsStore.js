import { observable, computed } from "mobx";

export default class {
  @observable products = getProducts();

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get productsMap() {
    let map = {};

    this.products.forEach((prod, index) => {
      map[prod.id.toString()] = index;
    });

    return map;
  }

  getProduct(id) {
    const index = this.productsMap[id];

    if (index === undefined) return null;

    return this.products[index];
  }
}

function getProducts() {
  return [
    {
      id: 100,
      title: "Ipnone 200",
      price: 12000,
      rest: 10,
      description:
        "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1025599/efb77f36-d993-4feb-a83a-c97a9f16056b/s1200"
    },
    {
      id: 101,
      title: "Samsung AAZ8",
      price: 22000,
      rest: 5,
      description:
        "Samsung, South Korean company that is one of the world's largest producers of electronic devices. ",
      img: "https://www.netmarket.md/produse_img/03201826511344291157.jpg"
    },
    {
      id: 102,
      title: "Nokia 3310",
      price: 5000,
      rest: 2,
      description:
        "Nokia Corporation is the world's largest manufacturer of mobile phones, serving customers in 130 countries",
      img:
        "https://media.collegetimes.com/uploads/2017/07/26165027/Nokia_3310_front_side.jpg"
    },
    {
      id: 103,
      title: "Huawei ZZ",
      description:
        "Huawei is a Chinese information and communications technology (ICT) company that specializes in telecommunications equipment. The company also offers services and consumer electronics including wearables, mobile broadband modems, smartphones, tablets and PCs.",
      price: 15000,
      rest: 8,
      img: "https://active.shop.by/pics/items/64TcCEFda6.jpg"
    },
    {
      id: 104,
      title: "Meizu ZZ",
      price: 13000,
      rest: 8,
      description:
        "Meizu phones are characterized by their light, comfortable design, premium sound quality, high-definition camera, and simple, elegant user interface, combining performance, ease of use and functionality with the durability needed to survive the human experience.",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1645344/f1c90e7a-d261-4dca-9066-aa5f42980809/s1200?webp=false"
    }
  ];
}
