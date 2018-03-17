// When loaded, only one project loaded/active
// Whatever project that is depends on the route
class ArrowsHandler {
  constructor() {
    /***** Set up *****/
    let state = this;
    this.prev = document.getElementById("prev");
    this.next = document.getElementById("next");

    //a list of all our projects names
    //(names based on their ejs partial)
    //and reference to element in DOM if
    //has been loaded async or otherwise
    this.projects = [
      {name: 'pixel', elem: null},
      {name: 'gallery', elem: null}
    ];

    this.projectsContainer = document.getElementById("projects_container");
    this.activeIndex = this.getActiveIndex(this.projectsContainer);
  
    this.prev.addEventListener('click', function(e) { state.clickedEvent(e, 'prev', state);});
    this.next.addEventListener('click', function(e) { state.clickedEvent(e, 'next', state);});

    document.addEventListener('keydown', function(e) { state.keypressEvent(e, state); });
  }

  getActiveIndex(container) {
    //only one project, but what's its index in our
    //internal script's list? (this.projects)
    
    //since ideally only one proj element exists, 
    //easier to loop through projects list than elements
    for(let i = 0; i < container.children.length; i++) {
    let elem = container.children[i];
      for(let j = 0; j < this.projects.length; j++) {
        if(elem.classList.contains(this.projects[j].name)) {
          this.projects[j].elem = elem;
          return j; 
        }
      }
    }
    //case where project not found.
    //404 ajax request error is an example
    return -1;
  }

  keypressEvent(e, state) {
    if(e.key === 'ArrowLeft') {
      this.clickedEvent(e, 'prev', state);  
    }
    else if(e.key === 'ArrowRight') {
      this.clickedEvent(e, 'next', state);
    }
  }

  clickedEvent(e, direction, ref) {
    let state = ref;
    let originalElem = state.projects[state.activeIndex].elem;
    this.updateActiveIndex(direction);
    
    //if elem has been loaded already
    if(state.projects[state.activeIndex].elem !== null) {
      originalElem.style.display = 'none';
      state.projects[state.activeIndex].elem.style.display = 'block';
    }
    else {
      let httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = alertContents;

      httpRequest.open('GET', '/partial/' + state.projects[state.activeIndex].name);
      httpRequest.send();
      
      function alertContents() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
          if(httpRequest.status === 200) {
            originalElem.style.display = 'none';
            state.projectsContainer.innerHTML += httpRequest.responseText;

            //my understanding is, because projectsContainer's innerHTML has
            //changed, our reference to that element(and its children) is no
            //longer valid. Thus we must update our var references if we wish
            //to manipulate these elements in the future (we do)
            state.updateReferences();
          }
          else {
            alert("there was an error");
          }
        }
      }
    }
  }

  updateActiveIndex(direction) {
    if(direction === 'prev') {
      this.activeIndex = this.activeIndex - 1;
      if(this.activeIndex < 0) {
        this.activeIndex = this.projects.length - 1;
      }
    }
    else {
      this.activeIndex = this.activeIndex + 1;
      if(this.activeIndex === this.projects.length) {
        this.activeIndex = 0;
      }
    }
  }

  updateReferences() {
    this.projectsContainer = document.getElementById("projects_container");
    //assign a proj element to an obj in projects list
    for(let i = 0; i < this.projectsContainer.children.length; i++) {
      let elem = this.projectsContainer.children[i];
      for(let j = 0; j < this.projects.length; j++) {
        if(elem.classList.contains(this.projects[j].name)) {
          this.projects[j].elem = elem;
          break;
        }
      }
    }
  }
};

export default ArrowsHandler;
