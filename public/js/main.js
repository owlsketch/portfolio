import '../css/reset.scss';
import '../css/head.scss';
import '../css/main.scss';

import './midnight.jquery.js';

$(document).ready(function() {
	//apply to every file
	$('nav.fixed').midnight();
});
