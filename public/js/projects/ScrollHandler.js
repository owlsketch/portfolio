class ScrollHandler {
  constructor (elements) {
    /****** Set up *****/
    let state = this
    let pos = this.getPos()

    /****** Retrieve elements *****/
    this.nav = document.getElementById('nav_layer')
    this.navHeight = this.nav.getBoundingClientRect().top + document.documentElement.scrollTop

    this.arrows = document.getElementById('proj_arrows');
    this.flatbg = document.getElementsByClassName('project_flat_bg');

    // ensured list is always up to date as reference
    // is updated whenever a new proj is loaded
    this.elements = elements

    /******* Events ******/
    // is requestAnimationFrame optimization necessary?
    window.addEventListener('scroll', function (e) { state.scrollEvent(e) })
  }

  scrollEvent (e) {
    /***** Toggled Values *****/
    let currPos = this.getPos()
    if (currPos !== this.pos) { 
      this.pos = currPos
      if(currPos >= 4) {
        for (let i = 0; i < this.elements.list.length; i++) {
          this.elements.list[i].children[1].classList.add('project_img_absolute')
        }
      }
      else {
        for (let i = 0; i < this.elements.list.length; i++) {
          this.elements.list[i].children[1].classList.remove('project_img_absolute')
        }
      }
      if(currPos >= 3) {
        this.arrows.classList.add('display_none')
      }
      else {
        this.arrows.classList.remove('display_none')
      }
      if(currPos >= 2) {
        for (let i = 0; i < this.elements.list.length; i++) {
          this.elements.list[i].children[0].classList.add('display_none')
        }
      }
      else {
        for (let i = 0; i < this.elements.list.length; i++) {
          this.elements.list[i].children[0].classList.remove('display_none')
        }
      }
      if(currPos >= 1) {
        this.nav.classList.add('nav_fixed')
      }
      else {
        this.nav.classList.remove('nav_fixed')
      }
    }

    /***** Range Values *****/
    if(window.pageYOffset - window.innerHeight/3 < 0) {
      let opacity = 1 - window.pageYOffset/(window.innerHeight/3.1)
      this.arrows.style.opacity = opacity.toString()
    }
    else if(window.pageYOffset - window.innerHeight/2 < 0) {
      //place code to display big text here and display flat bg
      let opacity = 0 +
        (window.pageYOffset - window.innerHeight/3)/(window.innerHeight/2 - window.innerHeight/3)
      for(let i = 0; i < this.flatbg.length; i++) {
        this.flatbg[i].style.opacity = opacity.toString();
      }
    }
  }
  
  getPos() {
    let pos = 0
    // 1: passed nav bar, 2: title text is covered, 3: arrows opacity 0 4: scrolled halway through page
    if (window.pageYOffset - this.navHeight > 0) pos = 1
    if (window.pageYOffset - window.innerHeight / 3.6 > 0) pos = 2
    if (window.pageYOffset - window.innerHeight / 3 > 0) pos = 3
    if (window.pageYOffset - window.innerHeight / 2 > 0) pos = 4
    
    return pos;
  }
};

export default ScrollHandler
