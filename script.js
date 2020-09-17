var app = new Vue({
  el: '#app',
  data: {
    swipeDoctors: null,
    scrollPosition: null,
    hideDoctors: false
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
    }
  },
  mounted: function () {
  	window.addEventListener('scroll', this.updateScroll);
    this.swipeDoctors = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      speed: 400,
      slidesOffsetBefore: 30
    });
  }
});

