import $ from 'jquery';
import './scss/main.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const NAVBAR_HEIGHT = 50;
let navbar = $('#navbar-pc');

// navbar fixed
$(window).on("scroll", () => {
    let scrollTop = $(window).scrollTop();
    // console.log(navbar.offset().top);
    // console.log($(window).scrollTop());
    if (scrollTop > NAVBAR_HEIGHT) {
        navbar.addClass('navbar-fixed');
    } else {
        navbar.removeClass('navbar-fixed');
    }
});

// GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// zn ksp section
let tl = gsap.timeline({scrollTrigger: {
    trigger: '.zn--ksp',
    start: '0% 100%',
    end: '100% 100%',
    // markers: true,
    // pin: true,
    onUpdate: (self) => {
        // console.log(self.progress);
        $('.mask-1').css('opacity', self.progress);
    },
    onLeave: () => {
        $('.mask-1').css('opacity', 0);
    },
}});

// zn design section
let tl2 = gsap.timeline({scrollTrigger: {
    trigger: '.zn--design',
    start: '0% 100%',
    end: '100% 100%',
    // markers: true,
    // pin: true,
    onUpdate: (self) => {
        // console.log(self.progress);
        $('.zn--ksp').css('transform',  `translateY(${self.progress * 250}px)`);
        $('.mask-2').css('opacity', self.progress * 1.5);
    },
    onLeave: () => {
        // console.log('onLeave');
        $('.zn--ksp').css('transform',  `translateY(0px)`);
        $('.mask-2').css('opacity', 0);
    },
}});

// test section
let tl3 = gsap.timeline({scrollTrigger: {
    trigger: '.test-part',
    start: '00% 10%',
    end: '91% 95%',
    // markers: true,
    // pin: true,
    onUpdate: (self) => {
        // console.log(self.progress);
        // $('.zn--ksp').css('transform',  `translateY(${self.progress * 250}px)`);
        // $('.mask-2').css('opacity', self.progress * 1.5);
        $('.design-mask').css('transform', `scale(${Math.min((self.progress * 1.3 + 1), 2.4)})`);
        $('.design-bg').css('transform', `scale(${ 0.75 + (1 - self.progress) * 0.25})`);
        $('.design-container').css('clip-path', `inset(34.56% 27.36% 7.27% round ${48 - 40 * (self.progress)}px)`);
    },
    onLeave: () => {
        // console.log('onLeave');
        // $('.mask-2').css('opacity', 0);
    },
}});

// hidden card section
let tl4 = gsap.timeline({scrollTrigger: {
    trigger: '.hidden-card',
    start: '95% 100%',
    end: 'bottom bottom',
    // markers: true,
    // pin: true,
    onUpdate: (self) => {
        // console.log(self.progress);
        $('.card').css('transform', `scale(${1.08 - self.progress * 0.08})`);
        $('.card').css('opacity', `${self.progress}`);
    },
    onLeave: () => {
        // console.log('onLeave');
    },
}});

let tl5 = gsap.timeline({scrollTrigger: {
    trigger: '.gtm-view1',
    start: '0% 48px',
    end: 'bottom 48px',
    // markers: true,
    // pin: true,
    onUpdate: (self) => {
        // console.log(self.progress);
        $('.design-img1').css('transform', `scale(${1.15 - self.progress * 0.15})`);
    },
    onLeave: () => {
        // console.log('onLeave');
    },
}});

let tl6 = gsap.timeline({scrollTrigger: {
    trigger: '.gtm-view2',
    start: '0% 48px',
    end: 'bottom 48px',
    // markers: true,
    // pin: true,
    onUpdate: (self) => {
        // console.log(self.progress);
        $('.design-img2').css('transform', `scale(${1.15 - self.progress * 0.15})`);
    },
    onLeave: () => {
        // console.log('onLeave');
    },
}});

let tl7 = gsap.timeline({scrollTrigger: {
    trigger: '.gtm-view3',
    start: '0% 48px',
    end: 'bottom 48px',
    // markers: true,
    // pin: true,
    onUpdate: (self) => {
        // console.log(self.progress);
        $('.design-img3').css('transform', `scale(${1.15 - self.progress * 0.15})`);
    },
    onLeave: () => {
        // console.log('onLeave');
    },
}});

// // cursor
// const cursor = document.querySelector('.arrow');
// document.addEventListener('mousemove', ( e ) => {
//     console.log(cursor);
    
//     cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
// });