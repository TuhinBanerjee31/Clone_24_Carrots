//NAVBAR SCROLL TRIGGER
let tl= gsap.timeline({
    scrollTrigger: {
        Trigger: '#nav',
        start: 160,
        scrub: true
    }
})

tl.to('#nav', {
    y: -2000,
    duration: 2
})

//PART-2 RIGHT SIDE SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  });

  //PART-3 SWITCH LOGIC

let weddings = document.querySelector('.wd-btn')
let social = document.querySelector('.sl-btn')
let coporate = document.querySelector('.cp-btn')
let venues = document.querySelector('.vn-btn')
let infoHeading = document.querySelector('#inner-info span')
let infoPara = document.querySelector('#inner-info p')
let p3Btn= document.querySelector('#p3-btn');
let p3_img= document.querySelector('#p3-left')

const fadeEffect = () => {
    infoHeading.classList.add("elementToFadeInAndOut");
    infoPara.classList.add("elementToFadeInAndOut");
    p3Btn.classList.add("elementToFadeInAndOut");
    p3_img.classList.add("elementToFadeInAndOut")

    setTimeout(function(){
        infoHeading.classList.remove("elementToFadeInAndOut");
        infoPara.classList.remove("elementToFadeInAndOut");
        p3Btn.classList.remove("elementToFadeInAndOut");
        p3_img.classList.remove("elementToFadeInAndOut");
    }, 2100);
}


social.addEventListener("click", function(){
    let heading= social.getAttribute('data-span')
    let para= social.getAttribute('data-p')
    let img= social.getAttribute('data-img')

    infoHeading.innerText= heading
    infoPara.innerText= para
    p3_img.style.backgroundImage= `url(${img})`; 

    weddings.removeAttribute('id');
    coporate.removeAttribute('id');
    venues.removeAttribute('id');
    social.id= 'active'
    fadeEffect()
})

coporate.addEventListener("click", function(){
    let heading= coporate.getAttribute('data-span')
    let para= coporate.getAttribute('data-p')
    let img= coporate.getAttribute('data-img')

    infoHeading.innerText= heading
    infoPara.innerText= para
    p3_img.style.backgroundImage= `url(${img})`;

    weddings.removeAttribute('id');
    social.removeAttribute('id');
    venues.removeAttribute('id');
    coporate.id= 'active'
    fadeEffect()
})

venues.addEventListener("click", function(){
    let heading= venues.getAttribute('data-span')
    let para= venues.getAttribute('data-p')
    let img= venues.getAttribute('data-img')

    infoHeading.innerText= heading
    infoPara.innerText= para
    p3_img.style.backgroundImage= `url(${img})`;

    weddings.removeAttribute('id');
    social.removeAttribute('id');
    coporate.removeAttribute('id');
    venues.id= 'active'
    fadeEffect()
})

weddings.addEventListener("click", function(){
    let heading= weddings.getAttribute('data-span')
    let para= weddings.getAttribute('data-p')
    let img= weddings.getAttribute('data-img')

    infoHeading.innerText= heading
    infoPara.innerText= para
    p3_img.style.backgroundImage= `url(${img})`;

    venues.removeAttribute('id');
    social.removeAttribute('id');
    coporate.removeAttribute('id');
    weddings.id= 'active'
    fadeEffect()
})


// PART-5 SWIPPER

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });