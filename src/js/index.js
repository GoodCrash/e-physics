'use strict';

import '../css/style.css';

window.onload = function() {
  console.log('window on loaded!');
}

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
