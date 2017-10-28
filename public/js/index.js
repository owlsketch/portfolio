import '../css/index.scss';

import p5 from 'p5';
import sketch from './cover.js';

$(document).ready(function() {
    new p5(sketch);
});
