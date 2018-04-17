// TODO: need to figure out how border affects the halfpoint values

class ScrollHandler {
  constructor (elements) {
    /** *** Set up *****/
    let state = this

    // retrieve elements to be manipulated through scroll
    // attained height by: https://stackoverflow.com/a/18673641
    this.nav = document.getElementById('nav_layer')
    this.navHeight = this.nav.getBoundingClientRect().top + document.documentElement.scrollTop

    // ensured list is always up to date as reference
    // is updated whenever a new proj is loaded
    this.elements = elements

    // is requestAnimationFrame optimization necessary?
    window.addEventListener('scroll', function (e) { state.scrollEvent(e) })
  }

  scrollEvent (e) {
    // top nav has been passed
    if (window.pageYOffset - this.navHeight > 0) {
      this.nav.classList.add('nav_fixed')
    } else {
      this.nav.classList.remove('nav_fixed')
    }
    // have scrolled halfway through page
    if (window.pageYOffset - window.innerHeight / 2 > 0) {
      // for all projects, make their position absolute
      for (let i = 0; i < this.elements.list.length; i++) {
        this.elements.list[i].classList.add('project_main_absolute')
      }
    } else {
      for (let i = 0; i < this.elements.list.length; i++) {
        this.elements.list[i].classList.remove('project_main_absolute')
      }
    }
  }
};

export default ScrollHandler
