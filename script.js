var app = new Vue({
  el: '#app',
  data: {
    swipeDoctors: null,
    scrollPosition: null,
    hideDoctors: false,
    overlap: false
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
      this.overlap = !this.overlap;
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

