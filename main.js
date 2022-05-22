import './style.css'

import workletURL from "./paint.js?url"

CSS.paintWorklet.addModule(workletURL);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <div>
    <p>This should be custom styled with Houdini!</p>
  </div>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
