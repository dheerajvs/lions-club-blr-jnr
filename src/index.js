import './styles/index.scss';
import bulmaCarousel from 'bulma-carousel';
import bulmaQuickview from 'bulma-quickview/dist/js/bulma-quickview.min.js';

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
