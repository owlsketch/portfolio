// TODO: need to figure out how border affects the halfpoint values

class ScrollHandler {
  constructor (elements) {
    /****** Set up *****/
    let state = this
    let pos = this.getPos()

    /****** Retrieve el *****/
    this.nav = document.getElementById('nav_layer')
    this.navHeight = this.nav.getBoundingClientRect().top + document.documentElement.scrollTop

    // ensured list is always up to date as reference
    // is updated whenever a new proj is loaded
    this.elements = elements

    /******* Events ******/
    // is requestAnimationFrame optimization necessary?
    window.addEventListener('scroll', function (e) { state.scrollEvent(e) })
  }

  scrollEvent (e) {
    let currPos = this.getPos()
    if (currPos !== this.pos) { 
      this.pos = currPos
      switch (currPos) {
        case 0:
          this.nav.classList.remove('nav_fixed')
          break
        case 1:
          this.nav.classList.add('nav_fixed')
          for (let i = 0; i < this.elements.list.length; i++) {
            this.elements.list[i].children[0].classList.remove('text_none')
          }
          break
        case 2:
          for (let i = 0; i < this.elements.list.length; i++) {
            this.elements.list[i].children[0].classList.add('text_none')
          }
          for (let i = 0; i < this.elements.list.length; i++) {
            this.elements.list[i].children[1].classList.remove('project_img_absolute')
          }
          break
        case 3:
          for (let i = 0; i < this.elements.list.length; i++) {
            this.elements.list[i].children[1].classList.add('project_img_absolute')
          }
        break
      }
    }
  }
  
  getPos() {
    let pos = 0
    // 1: passed nav bar, 2: title text is covered, 3: scrolled halway through page
    if (window.pageYOffset - this.navHeight > 0) pos = 1
    if (window.pageYOffset - window.innerHeight / 3.6 > 0) pos = 2
    if (window.pageYOffset - window.innerHeight / 2 > 0) pos = 3
    
    return pos;
  }
};

export default ScrollHandler
