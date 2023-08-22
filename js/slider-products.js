var splide = new Splide('.swiper-products', {
    perPage: 4,
    perMove: 1,
    cover: true,
    height: '10rem',
    lazyLoad: 'nearby',
    breakpoints: {
        1280: {
            perPage: 4, // Desktop: 4 elemente la vedere
        },
        961: {
            perPage: 2, // Tabletă: 2 elemente la vedere
        },
        757: {
            perPage: 1, // Dispozitive mobile: 1 element la vedere
        },
    },
});

splide.mount();