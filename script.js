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