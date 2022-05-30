import './style.scss'

import paintWorkletURL from "./js/paint.js?url"
import noiseWorkletURL from "./js/noise.js?url"
import andrewOneWorkletURL from "./js/andrew-1.js?url"

CSS.registerProperty({
  name: '--noise',
  syntax: '<number>',
  inherits: false,
  initialValue: 0,
})

CSS.registerProperty({
  name: '--noise-cell-size',
  syntax: '<number>',
  inherits: false,
  initialValue: 2,
});

CSS.registerProperty({
  name: '--static-gradient-color',
  syntax: '<color>',
  inherits: false,
  initialValue: 'red',
});

CSS.paintWorklet.addModule(paintWorkletURL);
CSS.paintWorklet.addModule(noiseWorkletURL);
CSS.paintWorklet.addModule(andrewOneWorkletURL);

document.querySelector('#app').innerHTML = `
  <button class="noise">Click me!</button>
  <div class="paint">
    <p>This should be custom styled with Houdini!</p>
  </div>
  <div class="andrew-1">I am andrew-1</div>
`
