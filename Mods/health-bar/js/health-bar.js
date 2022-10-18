//DEVELOPED AND MAINTAINED BY FLYGON LITE
//THIS CODE IS NOT OBFUSCATED, PLEASE DO NOT REPORT, THANK YOU ENJOY :)
//FOR QUESTIONS OR BUG FIXES CONTACT ON DISCORD- flyG0n LiTe#1241
var pokeGym = document.getElementById("healthContainer");
var svgns = "http://www.w3.org/2000/svg";
var pokeCenter = document.createElementNS(svgns, "svg");
var pokeShop = document.createElementNS(svgns, "rect");
var pokeBall = document.createElementNS(svgns, "path");
var greatBall = document.createElementNS(svgns, "path");
var ultraBall = document.createElementNS(svgns, "path");
var flygon = document.createElementNS(svgns, "rect");
var fillOverlay = document.createElementNS(svgns, "rect");

pokeCenter.setAttribute("aria-hidden", "true");
pokeCenter.setAttribute("viewbox", "0 0 530 80");
pokeCenter.setAttribute("width", "530px");
pokeCenter.setAttribute("height", "76px");

pokeShop.setAttribute("width", "530px");
pokeShop.setAttribute("height", "76px");
pokeShop.setAttribute("y", "3");
pokeShop.setAttribute("rx", "30.08");
pokeShop.classList.add("cls-2");

pokeBall.setAttribute(
  "d",
  "M1055.8,388a15.09,15.09,0,0,1,15.08,15.08v15.84A15.09,15.09,0,0,1,1055.8,434H586a15.09,15.09,0,0,1-15.08-15.08V403.08A15.09,15.09,0,0,1,586,388H1055.8m0-15H586a30.17,30.17,0,0,0-30.08,30.08v15.84A30.17,30.17,0,0,0,586,449H1055.8a30.17,30.17,0,0,0,30.08-30.08V403.08A30.17,30.17,0,0,0,1055.8,373Z"
);
pokeBall.classList.add("cls-3");

greatBall.setAttribute(
  "d",
  "M1055.8,371H586a30.17,30.17,0,0,0-30.08,30.08v5A30.17,30.17,0,0,1,586,376H1055.8a30.17,30.17,0,0,1,30.08,30.08v-5A30.17,30.17,0,0,0,1055.8,371Z"
);
greatBall.classList.add("cls-4");

ultraBall.setAttribute(
  "d",
  "M1055.8,445H586a30.17,30.17,0,0,1-30.08-30.08v6A30.17,30.17,0,0,0,586,451H1055.8a30.17,30.17,0,0,0,30.08-30.08v-6A30.17,30.17,0,0,1,1055.8,445Z"
);
ultraBall.classList.add("cls-5");

flygon.setAttribute("width", "500px");
flygon.setAttribute("height", "46px");
flygon.setAttribute("y", "19");
flygon.setAttribute("x", "15");
flygon.setAttribute("rx", "15.08");
flygon.classList.add("fill", "cls-6");

fillOverlay.setAttribute("width", "500px");
fillOverlay.setAttribute("height", "46px");
fillOverlay.setAttribute("y", "19");
fillOverlay.setAttribute("x", "15");
fillOverlay.setAttribute("rx", "15.08");
fillOverlay.classList.add("fill-overlay");

pokeCenter.appendChild(pokeShop);
pokeCenter.appendChild(pokeBall);
pokeCenter.appendChild(greatBall);
pokeCenter.appendChild(ultraBall);
pokeCenter.appendChild(flygon);
pokeCenter.appendChild(fillOverlay);
pokeGym.appendChild(pokeCenter);

var healthGain = new Audio();
healthGain.src = "https://berrybroscrypto.com/images/healthgain.mp3";
var lowHealth = new Audio();
lowHealth.src = "https://berrybroscrypto.com/images/lowhealth.mp3";
lowHealth.loop = false;

var healthNode = document.getElementById("healthHp");
var healthObserver = new MutationObserver((mutations) => {
  mutations.forEach((record) => {
    if (
      record.addedNodes.length === 1 &&
      record.addedNodes[0].nodeType === Node.TEXT_NODE &&
      record.removedNodes.length === 1 &&
      record.removedNodes[0].nodeType === Node.TEXT_NODE
    ) {
      var myHealth = Number(healthNode.textContent);
      flygon.style.setProperty("width", myHealth + "%");
      if (
        Number(record.removedNodes[0].nodeValue) < 30 &&
        Number(record.removedNodes[0].nodeValue) > 0
      ) {
        flygon.style.setProperty(
          "animation",
          "svg-shift-two 1s infinite alternate"
        );
        lowHealth.play();
      } else {
        flygon.style.setProperty(
          "animation",
          "svg-shift 3s infinite alternate"
        );
      }
      if (record.removedNodes[0].nodeValue === "100") {
        flygon.style.setProperty("width", 94.5 + "%");
      }
      if (
        Number(record.removedNodes[0].nodeValue) === 40 &&
        Number(record.addedNodes[0].nodeValue) === 41
      ) {
        healthGain.play();
        flygon.style.setProperty("transition", "width .1s");
        setTimeout(() => {
          flygon.style.setProperty("transition", "width 1s");
        }, 3000);
      }
    }
  });
});
healthObserver.observe(healthNode, {
  childList: true,
});
