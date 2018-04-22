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
    this.titles = document.getElementsByClassName('project_scroll_title');

    // ensured list is always up to date as reference
    // is updated whenever a new proj is loaded
    this.elements = elements

    /******* Events ******/
    // is requestAnimationFrame optimization necessary?
    window.addEventListener('scroll', function (e) { state.scrollEvent(e) })
  }

  scrollEvent (e) {
    //TODO: On arrow change, scroll bg and text isnt updated
    /***** Range Values *****/
    if(window.pageYOffset - window.innerHeight/3 < 0) {
      let opacity = 1 - window.pageYOffset/(window.innerHeight/3.1)
      this.arrows.style.opacity = opacity.toString()
    }
    else if(window.pageYOffset - window.innerHeight/2 < 0) {
      let opacity = 0 +
        (window.pageYOffset - window.innerHeight/3)/(window.innerHeight/2 - window.innerHeight/3)

      for(let i = 0; i < this.flatbg.length; i++) {
        this.flatbg[i].style.opacity = opacity.toString();
      }

      for(let i = 0; i < this.titles.length; i++) {
        this.titles[i].style.opacity = opacity.toString();
      }
    }

    /***** Toggled Values *****/
    let currPos = this.getPos()
    if (currPos !== this.pos) { 
      this.pos = currPos
      if(currPos >= 4) {
        for (let i = 0; i < this.elements.list.length; i++) {
          //TODO: use id's instead of index for better flexibility
          this.elements.list[i].children[2].classList.add('project_img_absolute')
        }

        for(let i = 0; i < this.flatbg.length; i++) {
          this.flatbg[i].style.opacity = "1"
        }

        for(let i = 0; i < this.titles.length; i++) {
          this.titles[i].style.opacity = "1";
        }
      }
      else {
        for (let i = 0; i < this.elements.list.length; i++) {
          this.elements.list[i].children[2].classList.remove('project_img_absolute')
        }
      }
      if(currPos >= 3) {
        this.arrows.classList.add('display_none')
      }
      else {
        this.arrows.classList.remove('display_none')

        for(let i = 0; i < this.flatbg.length; i++) {
          this.flatbg[i].style.opacity = "0"
        }

        for(let i = 0; i < this.titles.length; i++) {
          this.titles[i].style.opacity = "0";
        }
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
