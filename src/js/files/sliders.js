/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import "swiper/css";

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".columns__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      // autoHeight: true,
      speed: 800,
      //   keyboard: {
      //     enabled: true,
      //     onlyInViewport: true,
      //     pageUpDown: true,
      //   },
      //   touchRatio: 1,
      //   simulateTouch: true,
      loop: true,
      grabCursor: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      //   navigation: {
      //     prevEl: ".swiper-button-prev",
      //     nextEl: ".swiper-button-next",
      //   },

      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

      // События
      on: {},
    });
    new Swiper(".steps__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //   keyboard: {
      //     enabled: true,
      //     onlyInViewport: true,
      //     pageUpDown: true,
      //   },
      //   touchRatio: 1,
      //   simulateTouch: true,
      //   loop: true,
      grabCursor: true,
      //preloadImages: false,
      //lazy: true,

      /*
			  // Эффекты
			  effect: 'fade',
			  autoplay: {
				  delay: 3000,
				  disableOnInteraction: false,
			  },
			  */

      // Пагинация

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },

      // Скроллбар
      /*
			  scrollbar: {
				  el: '.swiper-scrollbar',
				  draggable: true,
			  },
			  */

      // Кнопки "влево/вправо"
      //   navigation: {
      //     prevEl: ".swiper-button-prev",
      //     nextEl: ".swiper-button-next",
      //   },

      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
          autoHeight: true,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // 992: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // },
        // 1268: {
        //   slidesPerView: 3,
        //   spaceBetween: 30,
        // },
      },

      // События
      on: {},
    });
    new Swiper(".reviews__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 0,
      // autoHeight: true,
      speed: 800,
      //   keyboard: {
      //     enabled: true,
      //     onlyInViewport: true,
      //     pageUpDown: true,
      //   },
      //   touchRatio: 1,
      //   simulateTouch: true,
      loop: true,
      grabCursor: true,
      //preloadImages: false,
      //lazy: true,

      /*
				// Эффекты
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/

      // Пагинация

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },

      // Скроллбар
      /*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

      // Кнопки "влево/вправо"
      //   navigation: {
      //     prevEl: ".swiper-button-prev",
      //     nextEl: ".swiper-button-next",
      //   },

      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
          // autoHeight: true,
        },
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1268: {
          slidesPerView: 2,
        },
      },

      // События
      on: {
        breakpoint: function (swiper, info) {
          swiper.updateSize();
        },
      },
    });
  }
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});