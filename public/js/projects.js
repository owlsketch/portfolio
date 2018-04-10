import '../css/projects.scss';
import '../css/media_projects.scss';

import ArrowsHandler from './projects/ArrowsHandler.js';
import ScrollHandler from './projects/ScrollHandler.js';

let proj = {};

proj.elements = {list: document.getElementsByClassName('project_main')}
proj.arrows = new ArrowsHandler(proj.elements);
proj.scroll = new ScrollHandler(proj.elements);
