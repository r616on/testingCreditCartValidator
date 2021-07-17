/* eslint-disable class-methods-use-this */

export default class CreditCartValiditi {
  constructor() {
    this.widget = document.querySelector(".credit-cart-validiti");
    this.logoArr = Array.from(this.widget.querySelectorAll(".img__item"));
    this.input = this.widget.querySelector(".input-row__input");
    this.button = this.widget.querySelector(".input-row__button");
  }

  init() {
    this.input.addEventListener("input", (e) => {
      // console.log(e);
      e.target.value = e.target.value.trim();
      this.logoArr.forEach((item) => {
        if (item.classList.contains("activ")) {
          item.classList.remove("activ");
        }
      });
      if (e.target.value[0]) {
        this.selectLogo(+e.target.value[0]);
      }
      if (
        +e.target.value.length === 16 &&
        this.moonAlgorithm(+e.target.value)
      ) {
        this.button.disabled = false;
        this.button.classList.add("valid");
      } else {
        this.button.disabled = true;
        if (this.button.classList.contains("valid")) {
          this.button.classList.remove("valid");
        }
      }
    });
  }

  selectLogo(number) {
    const addActiv = (str) => {
      this.logoArr.forEach((item) => {
        if (item.classList.contains(str)) {
          item.classList.add("activ");
        }
      });
    };

    if (number === 2) {
      addActiv("mir");
    } else if (number === 4) {
      addActiv("visa");
    } else if (number === 5) {
      addActiv("mastercard");
    } else if (number === 3) {
      addActiv("jcb");
    } else if (number === 6) {
      addActiv("discover");
    }
  }

  /* eslint-disable no-bitwise */
  moonAlgorithm(setValue) {
    let ch = 0;
    const num = String(setValue).replace(/\D/g, "");
    const isOdd = num.length % 2 !== 0;

    if (num === "") return false;

    for (let i = 0; i < num.length; i++) {
      let n = parseInt(num[i], 10);

      ch += (isOdd | 0) === i % 2 && (n *= 2) > 9 ? n - 9 : n;
    }

    return ch % 10 === 0;
  }
}
