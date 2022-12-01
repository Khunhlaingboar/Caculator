"use strict";
// const parts1 = document.querySelectorAll(".part");
// const displayBox = document.querySelector(".display_number");
// const del = document.querySelector(".del");
// const reset = document.querySelector(".reset");

// let number = "";

// let ddd = "";
// let total = 0;
// let total1 = 1;
// let active = 1;
// let combine = 0;
// let mm = 0;
// let datas = [];
// let char = [];
// let totalContainer = [];
// let operator = 0;
// let minus = 0;
// let multiply = 0;
// let divided = 0;
// let caculate = 0;

// function insertData() {
//   if (datas.length <= 1) {
//     for (let i = 0; i < datas.length; i++) {
//       total = Number(total + datas[datas.length - i - 1]);
//     }
//   } else {
//     caculation();
//   }
// }

// // function caculation() {
// //   // mm >= 2......................................................................................
// //   if (active == 1) {
// //     total = total + datas[datas.length - 1];
// //   } else if (active == 2) {
// //     total = Number(total - datas[datas.length - 1]);
// //   } else if (active == 3) {
// //     if (datas.length == 1) {
// //       total1;
// //     } else {
// //       total = total + datas[datas.length - 1];
// //       total1 = total1 * total;
// //       // total = total1;
// //       // if (caculate >= 1) {
// //       //   total = total1;
// //       // } else {
// //       //   total = 0;
// //       // }
// //       if (caculate >= 2) {
// //         total = 0;
// //       } else {
// //         total = total1;
// //       }
// //     }
// //   } else if (active == 4) {
// //     if (datas.length == 1) {
// //       total;
// //     } else {
// //       total = total / datas[datas.length - 1];
// //     }
// //   }
// // }

// for (let i = 0; i < parts1.length; i++) {
//   parts1[i].addEventListener("click", function () {
//     if (i == 0) {
//       number = number + 1;
//       ddd = displayBox.textContent = ddd + 1;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 1) {
//       number = number + 2;
//       ddd = displayBox.textContent = ddd + 2;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 2) {
//       number = number + 3;
//       ddd = displayBox.textContent = ddd + 3;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 3) {
//       number = number + 4;
//       ddd = displayBox.textContent = ddd + 4;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 4) {
//       number = number + 5;
//       ddd = displayBox.textContent = ddd + 5;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 5) {
//       number = number + 6;
//       ddd = displayBox.textContent = ddd + 6;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 6) {
//       number = number + 7;
//       ddd = displayBox.textContent = ddd + 7;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 7) {
//       number = number + 8;
//       ddd = displayBox.textContent = ddd + 8;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 8) {
//       number = number + 9;
//       ddd = displayBox.textContent = ddd + 9;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 9) {
//       number = number + 0;
//       ddd = displayBox.textContent = ddd + 0;
//       char.push(ddd);
//       console.log(char);
//       displayBox.textContent = ddd;
//     } else if (i == 10) {
//       number = Number(number);
//       datas.push(number);
//       number = "";
//       ddd = displayBox.textContent = ddd + "-";
//       char.push(ddd);
//       console.log(char);
//       if (combine == 0) {
//         displayBox.textContent = ddd;
//       }
//       if (combine == 1) {
//         displayBox.textContent = ddd.length >= 3 ? (ddd = total + "-") : ddd;
//       }
//       // if (active == 1) {
//       //   insertData();
//       // } else if (active == 3) {
//       //   caculation();
//       //   // total = total + total1;
//       //   // total = 0;
//       // } else if (active == 4) {
//       //   caculation();
//       // }

//       // if (active == 2) {
//       //   total = total - datas[datas.length - 1];
//       // }
//       // if (datas[0] == 0) {
//       //   datas[0] = Number("-" + datas[0]);
//       // }

//       // if (datas[0] == -0 && datas.length >= 2) {
//       //   total = 0;
//       //   total = total + (datas[0] - datas[1]);
//       // }

//       active = 2;
//     } else if (i == 11) {
//       number = Number(number);
//       datas.push(number);
//       number = "";
//       ddd = displayBox.textContent = ddd + "+";
//       char.push(ddd);
//       console.log(char);
//       if (combine == 0) {
//         displayBox.textContent = ddd;
//       }
//       if (combine == 1) {
//         displayBox.textContent = ddd.length >= 3 ? (ddd = total + "+") : ddd;
//       }
//       // if (active == 1) {
//       //   insertData();
//       // } else if (active == 2) {
//       //   caculation();
//       // } else if (active == 3) {
//       //   caculation();
//       //   // total = total + total1;
//       //   // total = 0;
//       // } else if (active == 4) {
//       //   caculation();
//       // }

//       active = 1;
//     } else if (i == 12) {
//       number = Number(number);
//       datas.push(number);
//       number = "";
//       ddd = displayBox.textContent = ddd + "*";
//       char.push(ddd);
//       console.log(char);
//       caculate++;
//       if (combine == 0) {
//         displayBox.textContent = ddd;
//       }
//       if (combine == 1) {
//         displayBox.textContent = ddd.length >= 3 ? (ddd = total + "*") : ddd;
//       }
//       // if (active == 3) {
//       //   // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
//       //   if (datas.length <= 1) {
//       //     for (let i = 0; i < datas.length; i++) {
//       //       total1 = Number(total1 * datas[datas.length - i - 1]);
//       //       // x❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
//       //       total1 = total;
//       //       total = 0;
//       //     }
//       //   } else {
//       //     total = 0;
//       //     caculation();
//       //   }
//       // }

//       // if (active == 1) {
//       //   total = total + datas[datas.length - 1];
//       //   total1 = total1 * total;
//       //   total = 0;
//       // } else if (active == 2) {
//       //   caculation();
//       //   total1 = total1 * total;
//       //   total = 0;
//       // } else if (active == 4) {
//       //   total1 = 1;
//       //   caculation();
//       //   total1 = total1 * total;
//       //   total = 0;
//       // }
//       active = 3;
//     } else if (i == 13) {
//       number = Number(number);
//       datas.push(number);
//       number = "";
//       ddd = displayBox.textContent = ddd + "/";
//       char.push(ddd);
//       console.log(char);
//       if (combine == 0) {
//         displayBox.textContent = ddd;
//       }
//       if (combine == 1) {
//         displayBox.textContent = ddd.length >= 3 ? (ddd = total + "/") : ddd;
//       }

//       // if (active == 4) {
//       //   insertData();
//       // } else if (active == 1) {
//       //   caculation();
//       // } else if (active == 2) {
//       //   caculation();
//       // } else {
//       //   caculation();
//       // }

//       active = 4;
//     } else if (i == 14) {
//       number = Number(number);
//       datas.push(number);
//       number = "";
//       combine = 1;
//       // if (active == 1) {
//       //   caculation();
//       // } else if (active == 2) {
//       //   caculation();
//       // } else if (active == 3) {
//       //   caculation();
//       // } else if (active == 4) {
//       //   caculation();
//       // }

//       // if (active != 3) {
//       //   console.log(total);
//       // } else {
//       //   console.log(total1);
//       // }
//       totalContainer.push(active != 3 ? total : total1);
//       displayBox.textContent = totalContainer[totalContainer.length - 1];
//       // total = 0;
//       // total1 = 0;
//       // if (caculate >= 1) {
//       //   total = total1;
//       // }
//       // datas = [];
//       // caculate = 0;
//     }
//   });
// }

// let numbers = [];

// del.addEventListener("click", function () {
//   numbers.push(mm);
//   mm++;
//   if (totalContainer.length >= 1) {
//     totalContainer = [];
//     number = "";
//     datas = [];
//     char = [];
//     total = 0;
//     total1 = 1;
//     active = 1;
//     combine = 0;
//     mm = 0;
//     ddd = "";
//     displayBox.textContent = ddd;
//   } else {
//     char.pop();
//     ddd = char[char.length - 1];
//     displayBox.textContent = ddd;
//   }
//   // if (mm % 2 != 0) {
//   //   if (mm == 1) {
//   //     number = "";
//   //   } else {
//   //     total = total - datas[datas.length - 1];
//   //     datas.pop();
//   //     number = "";
//   //   }
//   // } else if (mm % 2 == 0) {
//   //   if (mm == 2) {
//   //     number = "";
//   //   } else {
//   //     total;
//   //   }
//   // } else {
//   // }

//   if (ddd == undefined) {
//     ddd = "";
//     total = 0;
//     mm = 0;
//   }

//   console.log(mm);
// });
// // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// if (mm % 2 != 0 || mm == 1) {
//   datas.pop();
//   number = "";
// } else if (mm % 2 == 0) {
//   datas.pop();
//   total;
// } else {
// }

// reset.addEventListener("click", function () {
//   number = "";
//   datas = [];
//   char = [];
//   total = 0;
//   total1 = 1;
//   active = 1;
//   combine = 0;
//   mm = 0;
//   ddd = "";
//   displayBox.textContent = ddd;
// });

// const str = "A\uD87E\uDC04Z";
// let sii;
// let sss = "gooo";
// for (let i = 0; i < str.length; i++) {
//   let chraa;
//   [chraa, i] = chrAndI(str, i);
//   console.log(chraa);
// }

// function chrAndI(str, i) {
//   const code = str.charCodeAt(i);

//   if (Number.isNaN(code)) {
//     return "";
//   }

//   if (code < 0xd800 || code > 0xdfff) {
//     return [str.charAt(i), i];
//   }

//   if (0xd800 <= code && code <= 0xdbff) {
//     if (str.length <= i + 1) {
//       throw new Error("high surrogate without following low surrogate");
//     }
//     const next = str.charCodeAt(i + 1);
//     if (next < 0xdc00 || next > 0xdfff) {
//       throw new Error("high surrogate without following low surrogate");
//     }
//     return [str.charAt(i) + str.charAt(i + 1), i + 1];
//   }

//   if (i === 0) {
//     throw new Error("low surrogate without following low surrogate");
//   }
//   const prev = str.charCodeAt(i - 1);

//   if (prev < 0xd800 || prev > 0xdbff) {
//     throw new Error("low surrogate without following low surrogate");
//   }

//   return [str.charAt(i + 1), i + 1];
// }

// 👆......clicking type......👆

const parts1 = document.querySelectorAll(".part");
const displayBox = document.querySelector(".display_number");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const desktop = document.querySelector(".desktop_mode");
const mobile = document.querySelector(".mobile_mode");
const body = document.querySelector("body");
const creater = document.querySelector("main > h2");
const contaier = document.querySelector(".container");
const containingBlock = document.querySelector(".containing_block");
const cover = document.querySelectorAll(".cover");
const lights = document.querySelector(".lights > div");

let number = "";
let text = "";
let char = [];
let numberContainer = [];
let numbers = [];
let combineNumbers = "";
let mathOperators = [];
let operator = "";
let result;
let active = 0;
let activated = 1;

function numberInput(num) {
  number = number + num;
  numbers.push(number);
  number = "";
  text += num;
  char.push(text);
  console.log(char);
  active = 1;
  displayBox.textContent = char[char.length - 1];
}

function dataTransfering(ope) {
  text += ope;
  char.push(text);
  console.log(char);
  displayBox.textContent = char[char.length - 1];

  for (let i = 0; i < numbers.length; i++) {
    combineNumbers += numbers[i];
  }
}

function dataCaculating(ope) {
  numbers = [];
  numberContainer.push(combineNumbers);
  combineNumbers = "";
  operator += ope;
  mathOperators.push(operator);
  operator = "";
  console.log(combineNumbers);
  active = 0;
}

function resetting() {
  number = "";
  text = "";
  char = [];
  numberContainer = [];
  numbers = [];
  combineNumbers = "";
  mathOperators = [];
  operator = "";
  displayBox.textContent = "";
}

// 📱.......Mobile type.......📱

mobile.addEventListener("click", function () {
  desktop.style.display = "block";
  mobile.style.display = "none";
  body.style.background = "#d1ebf5";
  creater.style.color = "#ebe7e7";
  creater.style.textShadow = "3px 3px #03a7bd";
  contaier.style.border = "none";
  contaier.style.boxShadow = "2px 2px 5px 1px #03a7bd";
  contaier.style.background = "white";
  containingBlock.style.border = "1px solid #c1eaf1";
  containingBlock.style.color = "inherit";
  for (let i = 0; i < cover.length; i++) {
    cover[i].style.display = "none";
  }

  lights.style.background = "#03daf7";
  lights.style.borderRadius = "50%";

  activated = 1;
});

if (activated == 1) {
  for (let i = 0; i < parts1.length; i++) {
    parts1[i].addEventListener("click", function () {
      if (i == 0) {
        numberInput(1);
      } else if (i == 1) {
        numberInput(2);
      } else if (i == 2) {
        numberInput(3);
      } else if (i == 3) {
        numberInput(4);
      } else if (i == 4) {
        numberInput(5);
      } else if (i == 5) {
        numberInput(6);
      } else if (i == 6) {
        numberInput(7);
      } else if (i == 7) {
        numberInput(8);
      } else if (i == 8) {
        numberInput(9);
      } else if (i == 9) {
        numberInput(0);
      } else if (i == 10) {
        if (active == 1) {
          dataTransfering("-");

          dataCaculating("-");
        }
      } else if (i == 11) {
        if (active == 1) {
          dataTransfering("+");

          dataCaculating("+");
        }
      } else if (i == 12) {
        if (active == 1) {
          dataTransfering("*");

          dataCaculating("*");
        }
      } else if (i == 13) {
        if (active == 1) {
          dataTransfering("/");

          dataCaculating("/");
        }
      } else if (i == 14) {
        //🎰....... caculating .......🎰

        console.log(char[char.length - 1]);
        if (numbers.length != 0) {
          for (let i = 0; i < numbers.length; i++) {
            combineNumbers += numbers[i];
          }

          numbers = [];
          numberContainer.push(combineNumbers);
          combineNumbers = "";
          console.log(combineNumbers);
        }

        if (mathOperators.length > numberContainer.length) {
          if (
            mathOperators[mathOperators.length - 1] == "+" ||
            mathOperators[mathOperators.length - 1] == "-"
          ) {
            char[char.length - 1] += "0";
          } else {
            char[char.length - 1] += "1";
          }
        }

        const total = Function("return " + char[char.length - 1]);
        result = total();
        displayBox.textContent = result;
        char = [];
        text = "";
        text += result;
        char.push(String(result));
        active = 1;
      } else if (i == 15) {
        // 🧹.......backspace.......🧹

        active = active == 1 ? 0 : 1;
        char.pop();
        displayBox.textContent = char[char.length - 1];

        let remov = char[char.length - 1];
        console.log(remov);

        if (char.length >= 1) {
          if (remov[remov.length - 1] == "+") {
            mathOperators.pop();
          } else if (remov[remov.length - 1] == "-") {
            mathOperators.pop();
          } else if (remov[remov.length - 1] == "*") {
            mathOperators.pop();
          } else if (remov[remov.length - 1] == "/") {
            mathOperators.pop();
          }
        }

        text = char[char.length - 1];

        if (char.length == 0) {
          resetting();
        }
      } else if (i == 16) {
        // 🧹.......reset all datas.......🧹

        resetting();
      }
    });
  }
}

//💻......key board type......💻
desktop.addEventListener("click", function () {
  mobile.style.display = "block";
  desktop.style.display = "none";
  body.style.background = "black";
  creater.style.color = "black";
  creater.style.textShadow = "2px 2px #03a7bd";
  contaier.style.border = "2px solid #03daf7";
  contaier.style.boxShadow = "none";
  contaier.style.background = "none";
  containingBlock.style.border = "1px solid #35dcf1";
  containingBlock.style.color = "#07dbf7";
  for (let i = 0; i < cover.length; i++) {
    cover[i].style.display = "block";
  }

  lights.style.background = "none";
  lights.style.borderRadius = "3px";
  activated = 2;
});

document.addEventListener("keydown", function (keys) {
  if (activated == 2) {
    for (let i = 0; i < parts1.length; i++) {
      if (keys.key == 1 && i == 0) {
        parts1[i].style.background = "#039baf";
        numberInput(1);
      } else if (keys.key == 2 && i == 1) {
        parts1[i].style.background = "#039baf";
        numberInput(2);
      } else if (keys.key == 3 && i == 2) {
        parts1[i].style.background = "#039baf";
        numberInput(3);
      } else if (keys.key == 4 && i == 3) {
        parts1[i].style.background = "#039baf";
        numberInput(4);
      } else if (keys.key == 5 && i == 4) {
        parts1[i].style.background = "#039baf";
        numberInput(5);
      } else if (keys.key == 6 && i == 5) {
        parts1[i].style.background = "#039baf";
        numberInput(6);
      } else if (keys.key == 7 && i == 6) {
        parts1[i].style.background = "#039baf";
        numberInput(7);
      } else if (keys.key == 8 && i == 7) {
        parts1[i].style.background = "#039baf";
        numberInput(8);
      } else if (keys.key == 9 && i == 8) {
        parts1[i].style.background = "#039baf";
        numberInput(9);
      } else if (keys.key == 0 && i == 9) {
        parts1[i].style.background = "#039baf";
        numberInput(0);
      } else if (keys.key == "-" && i == 10) {
        parts1[i].style.background = "#039baf";
        if (active == 1) {
          dataTransfering("-");

          dataCaculating("-");
        }
      } else if (keys.key == "+" && i == 11) {
        parts1[i].style.background = "#039baf";
        if (active == 1) {
          dataTransfering("+");

          dataCaculating("+");
        }
      } else if (keys.key == "*" && i == 12) {
        parts1[i].style.background = "#039baf";
        if (active == 1) {
          dataTransfering("*");

          dataCaculating("*");
        }
      } else if (keys.key == "/" && i == 13) {
        parts1[i].style.background = "#039baf";
        if (active == 1) {
          dataTransfering("/");

          dataCaculating("/");
        }
      } else if (keys.key == "Enter" && i == 14) {
        parts1[i].style.background = "#039baf";
        console.log(char[char.length - 1]);
        if (numbers.length != 0) {
          for (let i = 0; i < numbers.length; i++) {
            combineNumbers += numbers[i];
          }

          numbers = [];
          numberContainer.push(combineNumbers);
          combineNumbers = "";
          console.log(combineNumbers);
        }

        if (mathOperators.length > numberContainer.length) {
          if (
            mathOperators[mathOperators.length - 1] == "+" ||
            mathOperators[mathOperators.length - 1] == "-"
          ) {
            char[char.length - 1] += "0";
          } else {
            char[char.length - 1] += "1";
          }
        }

        const total = Function("return " + char[char.length - 1]);
        result = total();
        displayBox.textContent = result;
        char = [];
        text = "";
        text += result;
        char.push(String(result));
        active = 1;
      } else if (keys.key == "Backspace" && i == 15) {
        parts1[i].style.background = "#039baf";
        active = active == 1 ? 0 : 1;
        char.pop();
        displayBox.textContent = char[char.length - 1];

        let remov = char[char.length - 1];
        console.log(remov);

        if (char.length >= 1) {
          if (remov[remov.length - 1] == "+") {
            mathOperators.pop();
          } else if (remov[remov.length - 1] == "-") {
            mathOperators.pop();
          } else if (remov[remov.length - 1] == "*") {
            mathOperators.pop();
          } else if (remov[remov.length - 1] == "/") {
            mathOperators.pop();
          }
        }

        text = char[char.length - 1];

        if (char.length == 0) {
          resetting();
        }
      }
    }
  }
});

document.addEventListener("keyup", function (keys) {
  if (activated == 2) {
    for (let i = 0; i < parts1.length; i++) {
      if (keys.key == 1 && i == 0) {
        parts1[i].style.background = "none";
      } else if (keys.key == 2 && i == 1) {
        parts1[i].style.background = "none";
      } else if (keys.key == 3 && i == 2) {
        parts1[i].style.background = "none";
      } else if (keys.key == 4 && i == 3) {
        parts1[i].style.background = "none";
      } else if (keys.key == 5 && i == 4) {
        parts1[i].style.background = "none";
      } else if (keys.key == 6 && i == 5) {
        parts1[i].style.background = "none";
      } else if (keys.key == 7 && i == 6) {
        parts1[i].style.background = "none";
      } else if (keys.key == 8 && i == 7) {
        parts1[i].style.background = "none";
      } else if (keys.key == 9 && i == 8) {
        parts1[i].style.background = "none";
      } else if (keys.key == 0 && i == 9) {
        parts1[i].style.background = "none";
      } else if (keys.key == "-" && i == 10) {
        parts1[i].style.background = "none";
      } else if (keys.key == "+" && i == 11) {
        parts1[i].style.background = "none";
      } else if (keys.key == "*" && i == 12) {
        parts1[i].style.background = "none";
      } else if (keys.key == "/" && i == 13) {
        parts1[i].style.background = "none";
      } else if (keys.key == "Enter" && i == 14) {
        parts1[i].style.background = "none";
      } else if (keys.key == "Backspace" && i == 15) {
        parts1[i].style.background = "none";
      }
    }
  }
});
