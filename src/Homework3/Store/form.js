import { observable, action } from "mobx";

class Form {
  @observable userInfo = {
    name: {
      label: "Name",
      value: "",
      type: "text",
      placeholder: "Enter your name..."
    },
    email: {
      label: "E-mail",
      value: "",
      type: "text",
      placeholder: "mail@example.com"
    },
    phone: {
      label: "Phone",
      value: "",
      type: "text",
      placeholder: "Enter your phone..."
    }
  };

  @action changeFormData = (property, value) => {
    this.userInfo[property] = { ...this.userInfo[property], value };
  };
}

export default new Form();
