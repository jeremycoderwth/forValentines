// const modal = document.getElementById('MyModal');
// const btn = document.getElementById('showBtn');
// const closeBtn = document.getElementById('close');

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// const declineBtn = document.getElementById('no');

// declineBtn.addEventListener('click', function() {
//     alert("nuh uh, still yes");
// });

// triggering the alert if my bubby clicked NO (u gotta no choice baby)

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const appendAlert = (message, type) => {
  alertPlaceholder.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("no");
let moving = true;

// if (alertTrigger) {
//   alertTrigger.addEventListener("click", () => {
//     appendAlert("Nuh uh! it still yes, my baby", "warning");

//     if (moving) {
//         const x = Math.random() * (window.innerWidth - alertTrigger.clientWidth);
//         const y = Math.random() * (window.innerHeight - alertTrigger.clientHeight);
//         alertTrigger.style.left = `${x}px`;
//         alertTrigger.style.top = `${y}px`;
//       }
//   });
// }
const modalContainer = document.getElementById('modalDialog');
alertTrigger.addEventListener('click', function() {
    appendAlert("Nuh uh! It still yes, my baby. I told u don't click the red one mweheheheh", "warning");

    if (moving === true) {
        const maxX = window.innerWidth - alertTrigger.clientWidth - 400;
        const maxY = window.innerHeight - alertTrigger.clientHeight - 300;
        const x = Math.max(0, Math.random() * maxX);
        const y = Math.max(0, Math.random() * maxY);
        alertTrigger.style.position = "absolute";
        alertTrigger.style.zIndex = "2";
        alertTrigger.style.left = `${x}px`;
        alertTrigger.style.top = `${y}px`;
        console.log(x, maxX, alertTrigger.clientWidth);
        console.log(y, maxY, alertTrigger.clientHeight);
    } else {
        console.log("error");
    }
});