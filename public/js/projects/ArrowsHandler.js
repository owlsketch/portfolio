// When site first loaded, only one project loaded/active
// Whatever project that is depends on the route
class ArrowsHandler {
  constructor (elements) {
    /** *** Set up *****/
    let state = this
    this.prev = document.getElementById('prev')
    this.next = document.getElementById('next')
    this.projectsContainer = document.getElementById('projects_container')

    // update this whenever a new project is added to html page
    this.elements = elements

    // a list of all our projects names (names based on their ejs partial)
    // and reference to element in DOM if has been loaded
    this.projects = [
      {name: 'pixel', elem: null},
      {name: 'gallery', elem: null}
    ]

    this.activeIndex = this.handleInitialIndex(this.projectsContainer)

    this.prev.addEventListener('click', function (e) { state.clickedEvent(e, 'prev', state) })
    this.next.addEventListener('click', function (e) { state.clickedEvent(e, 'next', state) })

    document.addEventListener('keydown', function (e) { state.keypressEvent(e, state) })
  }

  // find the active project on page load,
  // assign reference in this.elements and get index
  handleInitialIndex (container) {
    for (let i = 0; i < container.children.length; i++) {
      let elem = container.children[i]
      for (let j = 0; j < this.projects.length; j++) {
        if (elem.classList.contains(this.projects[j].name)) {
          this.projects[j].elem = elem
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
    let originalElem = state.projects[state.activeIndex].elem
    this.updateActiveIndex(direction)

    // if elem has been loaded already
    if (state.projects[state.activeIndex].elem !== null) {
      originalElem.classList.remove('active')
      originalElem.classList.add('hide')
      state.projects[state.activeIndex].elem.classList.remove('hide')
      state.projects[state.activeIndex].elem.classList.add('active')

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
            originalElem.classList.remove('active')
            originalElem.classList.add('hide')
            state.projectsContainer.innerHTML += httpRequest.responseText

            window.history.replaceState(null, null, state.projects[state.activeIndex].name)

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
      let elem = this.projectsContainer.children[i]
      for (let j = 0; j < this.projects.length; j++) {
        if (elem.classList.contains(this.projects[j].name)) {
          this.projects[j].elem = elem
          break
        }
      }
    }
  }
}

export default ArrowsHandler
