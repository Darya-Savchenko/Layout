'use strict'

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    
}





const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
    const swiper = new Swiper('.swiper-reviews', {
        // Optional parameters
        autoHeight: true,
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
}