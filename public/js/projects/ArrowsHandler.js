class ArrowsHandler {
  constructor() {
    /***** Set up *****/
    let state = this;
    this.prev = document.getElementById("prev");
    this.next = document.getElementById("next");

    this.projects = [];
    this.activeIndex = null;
    this.getProjects(document.getElementById("projects_container"));

  
    this.prev.addEventListener('mouseup', function(e) { state.clickedEvent(e, 'prev');});
    this.next.addEventListener('mouseup', function(e) { state.clickedEvent(e, 'next');});
  }

  getProjects(container) {
    let j = 0;
    for(let i = 0; i < container.children.length; i++) {
      let elem = container.children[i];
      if(elem.classList.contains('project')) {
        this.projects.push(elem);
        if(elem.classList.contains('active')) {
          this.activeIndex = j;
        }
        j = j + 1;
      }
    }
  }

  clickedEvent(e, direction) {
    //make current project display none
    this.projects[this.activeIndex].classList.remove('active'); 
    this.projects[this.activeIndex].classList.add('inactive'); 

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
  
    //display prev project
    this.projects[this.activeIndex].classList.remove('inactive'); 
    this.projects[this.activeIndex].classList.add('active'); 
  }

};

export default ArrowsHandler;
