var app = new Vue({
  el: '#app',
  data: {
    scrollPosition: null
  },
  methods: {
  	updateScroll () {
  		this.scrollPosition = window.scrollY;
  	}
  },
  mounted: function () {
  	window.addEventListener('scroll', this.updateScroll);
  }
});

var swipeDoctors = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    speed: 400
});