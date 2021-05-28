const channelSlider1 = new Swiper('.channel-slider-1', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-1',
    prevEl: '.channel-button-prev-1',
  },

});

const channelSlider2 = new Swiper('.channel-slider-2', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-2',
    prevEl: '.channel-button-prev-2',
  },

});

const channelSlider3 = new Swiper('.channel-slider-3', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-3',
    prevEl: '.channel-button-prev-3',
  },

});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
})


if (document.documentElement.scrollWidth <= 640) {
  channelSlider1.destroy();
  channelSlider2.destroy();
  channelSlider3.destroy();
}