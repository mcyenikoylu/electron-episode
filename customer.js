const remote = require('electron').remote
const main = remote.require('./index.js')

var button = document.createElement('button')
button.textContent = 'Open Customer'
button.addEventListener('click', () => {
    //alert('message')
    main.openWindow('customer')
}, false)
document.body.appendChild(button)