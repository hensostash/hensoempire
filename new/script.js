import { GUI } from "https://cdn.skypack.dev/dat.gui";
import gsap from "https://cdn.skypack.dev/gsap";

gsap.registerPlugin(ScrollTrigger);



// GSAP Stuff

const POPPERS = document.querySelectorAll(".pop-out-image");

POPPERS.forEach(pop => {
  const IMG = pop.querySelectorAll("img");
  gsap.to(IMG, {
    scrollTrigger: {
      trigger: pop,
      scrub: 1,
      start: "bottom bottom+=50",
      end: "top top+=50" },

    filter: index => index === 0 ? "opacity(0)" : "opacity(1)",
    yPercent: -30 });

});