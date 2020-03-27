import { observable, action, computed } from "mobx";

export default class {
  @observable formInfo = {
    name: {
      label: "Name",
      value: "DF",
      type: "text",
      placeholder: "Enter your name..."
    },
    email: {
      label: "E-mail",
      value: "mailexample.com",
      type: "text",
      placeholder: "mail@example.com"
    },
    phone: {
      label: "Phone",
      value: "12341234",
      type: "text",
      placeholder: "Enter your phone..."
    }
  };

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get userInfo() {
    let map = {};

    for (let prop in this.formInfo) {
      map[prop] = this.formInfo[prop].value;
    }

    return map;
  }

  @action changeFormData = (property, value) => {
    this.formInfo[property].value = value;
  };
}
