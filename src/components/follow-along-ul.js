let ddBackground, ddUnderline;
let isActive = false;
let initialized = false;

function initBackground() {
    initialized = true;
    ddBackground = document.createElement('span');

    ddBackground.className = 'dd-background';
    ddBackground.style.backgroundColor = 'white';
    ddBackground.style.width = '0px';
    ddBackground.style.position = 'absolute';
    ddBackground.style.transitionProperty = 'width';
    ddBackground.style.transitionDuration = '.4s';
    ddBackground.style.boxShadow = '0 0 10px rgba(0, 0, 0, .15)';

    ddBackground.addEventListener('transitionend', () => toggleMiddleTrans(isActive));
}

function initUnderline() {

}

function followAlong(e) {
    const p = e.currentTarget;
    const parent = p.parentElement;

    console.log(p);

    const dd = Array.from(p.children).find(a => a.classList.contains('nav-dropdown'));
    const isEmpty = dd ? !dd.children.length : true;

    if (!initialized) {
        initBackground();
        parent.insertBefore(ddBackground, parent.firstChild);
        parent.addEventListener('mouseenter', () => {
            isActive = true;
        });
        parent.addEventListener('mouseleave', () => {
            isActive = false;
            faRemove();
        });

        isActive = true;

        if (parent.style.position === 'static' || typeof parent.style.position === 'undefined') {
            parent.style.position = 'relative';
        }
    }

    if (isEmpty) {
        faRemove();
    }
    else {
        faSwitch(dd, parent);
    }
}

function faSwitch(dd, parent) {
    const compStyle = window.getComputedStyle(dd),
        boundingRect = dd.getBoundingClientRect(),
        boundingRectParent = parent.getBoundingClientRect();

    const {width: w, height: h} = compStyle;
    const {left: x, top: y} = boundingRect;

    const {left: xP, top: yP} = boundingRectParent;

    const xR = `${x - xP}px`
    const yR = `${y - yP}px`

    ddBackground.style.width    = `${w}`;
    ddBackground.style.height   = `${h}`;
    ddBackground.style.left     = xR;
    ddBackground.style.top      = yR;

    setTimeout(() => toggleMiddleTrans(true));
}

function faRemove() {
    ddBackground.style.width = '0px';
}

function toggleMiddleTrans(bool = false) {
    const props = !bool ? 'width' : 'width, height, left';
    ddBackground.style.transitionProperty = props;
}

export default followAlong;