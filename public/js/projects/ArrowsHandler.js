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

    this.activeIndex = this.handleInitialIndex(this.projectsContainer, this.articlesContainer)

    this.prev.addEventListener('click', function (e) { state.clickedEvent(e, 'prev', state) })
    this.next.addEventListener('click', function (e) { state.clickedEvent(e, 'next', state) })

    document.addEventListener('keydown', function (e) { state.keypressEvent(e, state) })
  }

  // find the active project on page load,
  // assign reference in this.elements and get index
  handleInitialIndex (pContainer, aContainer) {
    for (let i = 0; i < pContainer.children.length; i++) {
      let pElem = pContainer.children[i]
      for (let j = 0; j < this.projects.length; j++) {
        if (pElem.classList.contains(this.projects[j].name)) {
          this.projects[j].pElem = pElem
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

    // if elem has been loaded already
    if (state.projects[state.activeIndex].pElem !== null) {
      pOriginalElem.classList.remove('active')
      pOriginalElem.classList.add('hide')
      state.projects[state.activeIndex].pElem.classList.remove('hide')
      state.projects[state.activeIndex].pElem.classList.add('active')

      window.history.replaceState(null, null, state.projects[state.activeIndex].name)
    } else {
      let httpRequest = new window.XMLHttpRequest()
      httpRequest.onreadystatechange = handleContents

      httpRequest.open('GET', '/partial/' + state.projects[state.activeIndex].name)
      httpRequest.send()

      // TODO: Fix inner declaration
      function handleContents () {
        if (httpRequest.readyState === window.XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            pOriginalElem.classList.remove('active')
            pOriginalElem.classList.add('hide')
            state.projectsContainer.innerHTML += httpRequest.responseText

            window.history.replaceState(null, null, state.projects[state.activeIndex].name)

            state.updateReferences()
          } else {
            window.alert('there was an error')
          }
        }
      }
    }

    /// ///again but for articles
    // if elem has been loaded already
    if (state.projects[state.activeIndex].aElem !== null) {
      aOriginalElem.classList.add('display_none')
      state.projects[state.activeIndex].aElem.classList.remove('display_none')
    } else {
      let httpRequest = new window.XMLHttpRequest()
      httpRequest.onreadystatechange = handleContents

      httpRequest.open('GET', '/article/' + state.projects[state.activeIndex].name)
      httpRequest.send()

      // TODO: Fix inner declaration
      function handleContents () {
        if (httpRequest.readyState === window.XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            aOriginalElem.classList.add('display_none')
            state.articlesContainer.innerHTML += httpRequest.responseText

            state.updateReferences()
          } else {
            window.alert('there was an error')
          }
        }
      }
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
  updateReferences () {
    this.elements.list = document.getElementsByClassName('project_main')
    this.projectsContainer = document.getElementById('projects_container')

    // assign a proj element to an obj in projects list
    for (let i = 0; i < this.projectsContainer.children.length; i++) {
      let pElem = this.projectsContainer.children[i]
      for (let j = 0; j < this.projects.length; j++) {
        if (pElem.classList.contains(this.projects[j].name)) {
          this.projects[j].pElem = pElem
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
    console.log(this.projects)
  }
}

export default ArrowsHandler
