// When site first loaded, only one project loaded/active
// Whatever project that is depends on the route
class ArrowsHandler {
  constructor (elements) {
    /** *** Set up *****/
    let state = this
    this.prev = document.getElementById('prev')
    this.next = document.getElementById('next')
    this.projectsContainer = document.getElementById('projects_container')
    this.articlesContainer = document.getElementById('articles_container')

    // update this whenever a new project is added to html page
    this.elements = elements

    // a list of all our projects names (names based on their ejs partial)
    // and reference to element in DOM if has been loaded
    this.projects = [
      {name: 'pixel', pElem: null, aElem: null},
      {name: 'gallery', pElem: null, aElem: null}
    ]

    this.activeIndex = this.handleInitialIndex(this.projectsContainer, this.articlesContainer, state)

    this.prev.addEventListener('click', function (e) { state.clickedEvent(e, 'prev', state) })
    this.next.addEventListener('click', function (e) { state.clickedEvent(e, 'next', state) })

    document.addEventListener('keydown', function (e) { state.keypressEvent(e, state) })
  }

  // find the active project on page load,
  // assign reference in this.elements and get index
  handleInitialIndex (pContainer, aContainer, state) {
    for (let i = 0; i < pContainer.children.length; i++) {
      let pElem = pContainer.children[i]
      for (let j = 0; j < this.projects.length; j++) {
        if (pElem.classList.contains(this.projects[j].name)) {
          this.projects[j].pElem = pElem
          let moreButton = pElem.getElementsByClassName('scroll_link')
          for(let k = 0; k < moreButton.length; k++) {
            moreButton[k].addEventListener('click', function (e) { state.moreClickEvent(e, state) })
          }
        }
      }
    }
    for (let i = 0; i < aContainer.children.length; i++) {
      let aElem = aContainer.children[i]
      for (let j = 0; j < this.projects.length; j++) {
        if (aElem.classList.contains(this.projects[j].name)) {
          this.projects[j].aElem = aElem
          return j
        }
      }
    }
    // case where project not found.
    return -1
  }

  moreClickEvent(e, state) {
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, window.innerHeight / 2)
      return;
    }

    let start = window.pageYOffset
    let startTime = 'now' in window.performance ? performance.now() : new Date().getTime()
    let duration = 600;
    function scroll() {
      let now = 'now' in window.performance ? performance.now() : new Date().getTime()
      let time = Math.min(1, ((now - startTime) / duration))

      window.scroll(0, Math.ceil(((time * (2 - time)) * ((window.innerHeight / 2) - start)) + start))
      
      if(window.pageYOffset >= window.innerHeight / 2) {
        return
      }
      requestAnimationFrame(scroll)
    }

    scroll()
  }

  keypressEvent (e, state) {
    if (e.key === 'ArrowLeft') {
      this.clickedEvent(e, 'prev', state)
    } else if (e.key === 'ArrowRight') {
      this.clickedEvent(e, 'next', state)
    }
  }

  clickedEvent (e, direction, ref) {
    let state = ref
    let pOriginalElem = state.projects[state.activeIndex].pElem
    let aOriginalElem = state.projects[state.activeIndex].aElem
    this.updateActiveIndex(direction)

    // loading next landing project content
    if (state.projects[state.activeIndex].pElem !== null) {
      pOriginalElem.classList.remove('active')
      pOriginalElem.classList.add('hide')
      state.projects[state.activeIndex].pElem.classList.remove('hide')
      state.projects[state.activeIndex].pElem.classList.add('active')

      window.history.replaceState(null, null, state.projects[state.activeIndex].name)
    } else {
      window.fetch('/partial/' + state.projects[state.activeIndex].name).then(function (response) {
        response.text().then(function (text) {
          pOriginalElem.classList.remove('active')
          pOriginalElem.classList.add('hide')
          state.projectsContainer.innerHTML += text

          window.history.replaceState(null, null, state.projects[state.activeIndex].name)
          state.updateReferences(state)
        })
      })
    }

    // loading next project description content
    if (state.projects[state.activeIndex].aElem !== null) {
      aOriginalElem.classList.add('display_none')
      state.projects[state.activeIndex].aElem.classList.remove('display_none')
    } else {
      window.fetch('/article/' + state.projects[state.activeIndex].name).then(function (response) {
        response.text().then(function (text) {
          aOriginalElem.classList.add('display_none')
          state.articlesContainer.innerHTML += text

          state.updateReferences(state)
        })
      })
    }
  }

  updateActiveIndex (direction) {
    if (direction === 'prev') {
      this.activeIndex = this.activeIndex - 1
      if (this.activeIndex < 0) {
        this.activeIndex = this.projects.length - 1
      }
    } else {
      this.activeIndex = this.activeIndex + 1
      if (this.activeIndex === this.projects.length) {
        this.activeIndex = 0
      }
    }
  }

  // called after every async call since html nodes change
  updateReferences (state) {
    this.elements.list = document.getElementsByClassName('project_main')
    this.projectsContainer = document.getElementById('projects_container')

    // assign a proj element to an obj in projects list
    for (let i = 0; i < this.projectsContainer.children.length; i++) {
      let pElem = this.projectsContainer.children[i]
      for (let j = 0; j < this.projects.length; j++) {
        if (pElem.classList.contains(this.projects[j].name)) {
          this.projects[j].pElem = pElem
          let moreButton = pElem.getElementsByClassName('scroll_link')
          for(let k = 0; k < moreButton.length; k++) {
            moreButton[k].addEventListener('click', function (e) { state.moreClickEvent(e, state) })
          }
          break
        }
      }
    }
    for (let i = 0; i < this.articlesContainer.children.length; i++) {
      let aElem = this.articlesContainer.children[i]
      for (let j = 0; j < this.projects.length; j++) {
        if (aElem.classList.contains(this.projects[j].name)) {
          this.projects[j].aElem = aElem
          break
        }
      }
    }
  }
}

export default ArrowsHandler
