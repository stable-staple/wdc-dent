var img = new Image();
img.src = 'img/modern_tech2.png';

var app = new Vue({
  el: '#app',
  data: {
    swipeDoctors: null,
    scrollPosition: null,
    hideDoctors: false,
    overlap: false,
    currentTechSlide: 0,
    techContentTransition: false,
    techSlides: [
      {
        techTitle: "Современные технологии",
        techDesc: "Действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы",
        techImgUrl: 'img/modern_tech.png'
      },
      {
        techTitle: "Современные технологии2",
        techDesc: "Действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы",
        techImgUrl: 'img/modern_tech2.png'
      }
    ]
  },
  methods: {
  	updateScroll: function () {
  		this.scrollPosition = window.scrollY;
  	},
    nextSlide: function () {
      if (this.swipeDoctors.isBeginning && !this.hideDoctors)
        this.hideDoctors = true;
      else
        this.swipeDoctors.slideNext();
    },
    prevSlide: function () {
      if (this.swipeDoctors.isBeginning && this.hideDoctors)
        this.hideDoctors = false;
      else
        this.swipeDoctors.slidePrev();
    },
    nextTechSlide: function () {
      if (this.techContentTransition === true || this.currentTechSlide >= 1)
        return;
      this.techContentTransition = true;
      setTimeout(() => this.currentTechSlide++, 500);
      setTimeout(() => this.techContentTransition = false, 1000);
    },
    prevTechSlide: function () {
      if (this.techContentTransition === true || this.currentTechSlide <= 0)
        return;
      this.techContentTransition = true;
      setTimeout(() => this.currentTechSlide--, 500);
      setTimeout(() => this.techContentTransition = false, 1000);
    }
  },
  mounted: function () {
  	window.addEventListener('scroll', this.updateScroll);
    this.swipeDoctors = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      speed: 400
    });
    this.swipeTech = new Swiper('.swiper-container--tech', {
      slidesPerView: '1',
      speed: 400,
      fadeEffect: {
        crossFade: true
      }
    });
  }
});

