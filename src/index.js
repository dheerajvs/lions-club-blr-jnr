require('./styles.scss');

const bulmaCarousel = require('../node_modules/bulma-carousel/dist/js/bulma-carousel');
const bulmaQuickview = require('../node_modules/bulma-quickview/dist/js/bulma-quickview');

bulmaCarousel.attach('.slider-container', {
  slidesToShow: 3,
  slidesToScroll: 1,
  breakpoints: [
    {
      changePoint: 480,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    {
      changePoint: 640,
      slidesToShow: 2,
      slidesToScroll: 1,
    },
    {
      changePoint: 768,
      slidesToShow: 3,
      slidesToScroll: 1,
    },
    {
      changePoint: 1023,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    {
      changePoint: 1216,
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  ],
});

bulmaQuickview.attach();
