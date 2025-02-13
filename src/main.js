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
        $('.mask-1').css('opacity', self.progress * 2);
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
        console.log(self.progress);
        $('.zn--ksp').css('transform',  `translateY(${self.progress * 250}px)`);
        $('.mask-2').css('opacity', self.progress * 2);
    },
    onLeave: () => {
        // console.log('onLeave');
        $('.mask-2').css('opacity', 0);
    },
}});