// both ways work

let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll(".btn");
let equl = document.querySelector(".btn-equl");
let clear = document.querySelector(".btn-clear");

window.onload = function () {
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      let theclickedbutton = e.target.dataset.num;
      // console.log(theclickedbutton);
      screen.value += theclickedbutton;
    });
  });
  equl.addEventListener("click", result);
  clear.addEventListener("click", function () {
    screen.value = "";
  });
};
document.addEventListener("keydown", function (e) {
  let thechose = document.querySelector(`button[data-num = "${e.key}"]`);
  if (!thechose) return;

  screen.value += thechose.innerHTML;
});
// (function () {
//   let screen = document.querySelector("#screen");
//   let buttons = document.querySelectorAll(".btn");
//   let equl = document.querySelector(".btn-equl");
//   let clear = document.querySelector(".btn-clear");

//   buttons.forEach(function (button) {
//     button.addEventListener("click", (e) => {
//       let values = e.target.dataset.num;
//       //   console.log(typeof value);//string
//       screen.value += values;
//     });
//     equl.addEventListener("click", (e) => {
//       let answar = eval(screen.value);
//       screen.value = answar;
//     });
//     clear.addEventListener("click", function () {
//       screen.value = "";
//     });
//   });
// })();

function result() {
  let answar = eval(screen.value);
  screen.value = answar;
}
