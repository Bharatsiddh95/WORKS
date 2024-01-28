function loding() {
  let tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });

  tl.from("#yellow2", {
    top: "100%",
    delay: 0.6,
    duration: 0.7,
    ease: "expo.out",
  });
  tl.to(
    "#loader video",
    {
      top: "-100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.3,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );

  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loding();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});



let elems = document.querySelectorAll(".elem")
let page2 = document.querySelector("#page2")
elems.forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
        let img = ele.getAttribute("data-img")
       page2.style.backgroundImage = `url(${img})`
    })

})