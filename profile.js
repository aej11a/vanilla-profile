CSS.paintWorklet.addModule('PaintModules/borders.js');
CSS.paintWorklet.addModule('PaintModules/pop.js');
CSS.paintWorklet.addModule('PaintModules/lightning.js');

window.setInterval(() => {
    const header = document.getElementsByTagName('header')[0];
    if (header.className.includes('pink')) {
        header.classList.remove('pink');
        header.classList.add('blue');
    } else if (header.className.includes('blue')) {
        header.classList.remove('blue');
    } else {
        header.classList.add('pink');
    }
}, 2000)

let shouldExpand = true;

window.setInterval(() => {
    const header = document.getElementsByTagName('header')[0];
    if (header.className.includes('expand')) {
        header.classList.remove('expand');
    } else if (header.className.includes('contract')) {
        header.classList.remove('contract');
    } else if (shouldExpand) {
        header.classList.add('expand');
        shouldExpand = false;
    } else if (!shouldExpand) {
        header.classList.add('contract')
        shouldExpand = true
    }
}, 1750)
