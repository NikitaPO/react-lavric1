import { observable, action } from "mobx";

class Form {
  @observable userInfo = {
    name: {
      label: "Name",
      value: "DF",
      type: "text",
      placeholder: "Enter your name..."
    },
    email: {
      label: "E-mail",
      value: "adsfassfas.com",
      type: "text",
      placeholder: "mail@example.com"
    },
    phone: {
      label: "Phone",
      value: "13412351235123",
      type: "text",
      placeholder: "Enter your phone..."
    }
  };

  @action changeFormData = (property, value) => {
    this.userInfo[property] = { ...this.userInfo[property], value };
  };
}

export default new Form();
