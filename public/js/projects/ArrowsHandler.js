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
  
    this.prev.addEventListener('click', function(e) { state.clickedEvent(e, 'prev');});
    this.next.addEventListener('click', function(e) { state.clickedEvent(e, 'next');});

    document.addEventListener('keydown', function(e) { state.keypressEvent(e); });
  }

  getActiveIndex(container) {
    //only one project, but what's its index in our
    //internal script's list? (this.projects)
    for(let i = 0; i < this.projects.length; i++) {
      for(let j = 0; j < container.children.length; j++) {
        let elem = container.children[j];
        if(elem.classList.contains(this.projects[i].name)) {
          this.projects[i].elem = elem;
          return i; 
        }
      }
    }
    //case where project not found.
    //404 ajax request error is an example
    return -1;
  }

  clickedEvent(e, direction) {
    let projectList = this.projects;
    let originalElem = this.projects[this.activeIndex].elem;
    let projectsContainer = this.projectsContainer;

    //change index by 1
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

    let activeIndex = this.activeIndex;
    
    if(this.projects[this.activeIndex].elem !== null) {
      originalElem.style.display = 'none';
      this.projects[this.activeIndex].elem.style.display = 'block';
      /*
      this.projects[this.activeIndex].elem.classList.remove('inactive');
      this.projects[this.activeIndex].elem.classList.add('active');
      originalElem.classList.remove('active');
      originalElem.classList.add('inactive');
      */
    }
    else {
      let httpRequest = new XMLHttpRequest();
      //funct to handle response
      httpRequest.onreadystatechange = alertContents;

      httpRequest.open('GET', '/partial/' + this.projects[this.activeIndex].name);
      httpRequest.send();
      
      function alertContents() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
          if(httpRequest.status === 200) {
            console.log('loaded');
            originalElem.style.display = 'none';
            /*
            originalElem.classList.remove('active');
            originalElem.classList.add('inactive');
            */
            projectsContainer.innerHTML += httpRequest.responseText;

            //finally add new elem to our internal list to indicate its been loaded
            projectList[activeIndex].elem = document.getElementById(projectList[activeIndex].name);
          }
            else {
            alert("there was an error");
          }
        }
      }
    }
  }

  keypressEvent(e) {
    if(e.key === 'ArrowLeft') {
      this.clickedEvent(e, 'prev');  
    }
    else if(e.key === 'ArrowRight') {
      this.clickedEvent(e, 'next');
    }
  }

};

export default ArrowsHandler;
