import '../../node_modules/svgxuse/svgxuse.js';
const Swiper = require('swiper');

const mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

window.addEventListener('load', function () {
    const container = document.getElementById('js_container');
    const loader = document.getElementById('js_loader');

    container.classList.remove('hide');
    loader.classList.add('hide');
});