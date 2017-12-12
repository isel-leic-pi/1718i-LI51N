
const initialClassName = 'visibleH2';
let currentClassName = initialClassName;
let elem;

function init() {
    elem = document.getElementById('the-h2-id');
    elem.className = currentClassName;
}

function toggle() {
    currentClassName = currentClassName === 'visibleH2' ? 'invisibleH2' : 'visibleH2';
    elem.className = currentClassName;
}