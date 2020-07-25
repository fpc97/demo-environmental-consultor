const fa = {
    // Flags
    isActive: false,
    isInited: false,

    // Un-inited HTML Elements
    background: null,
    underline: null
}

const basicStyles = {
    backgroundColor: 'white',
    width: '0px',
    position: 'absolute',
    transitionProperty: 'width',
    transitionDuration: '.4s',
    boxShadow: '0 0 10px rgba(0, 0, 0, .15)'
};

function initIndividualElement(elementName) {
    const thisElement = document.createElement('span');

    thisElement.className = `dd-${elementName}`;

    Object.assign(thisElement.style, basicStyles);

    thisElement.addEventListener('transitionend', () => toggleMiddleTrans(thisElement, fa.isActive));

    fa[elementName] = thisElement;
}

function initElements() {
    fa.isInited = true;
    
    initIndividualElement('background');
    initIndividualElement('underline');
}

function followAlong(e) {
    const p = e.currentTarget;
    const parent = p.parentElement;

    const dd = Array.from(p.children).find(a => a.classList.contains('nav-dropdown'));
    const isEmpty = dd ? !dd.children.length : true;

    if (!fa.isInited) {
        initElements();

        parent.insertBefore(fa.background, parent.firstChild);
        parent.insertBefore(fa.underline, parent.firstChild);

        parent.addEventListener('mouseenter', () => {
            fa.isActive = true;
        });

        parent.addEventListener('mouseleave', () => {
            fa.isActive = false;
            faRemove(fa.background);
            faRemove(fa.underline);
        });

        fa.isActive = true;

        if (parent.style.position === 'static' || typeof parent.style.position === 'undefined') {
            parent.style.position = 'relative';
        }
    }

    if (isEmpty) {
        faRemove(fa.background);
        faRemove(fa.underline);
    }
    else {
        faSwitchBackground(dd);
    }
    faSwitchUnderline(p);
}

function parentBounds(a) {
    return a.parentElement.getBoundingClientRect();
}

function faSwitchBackground(dd) {
    // Instance's dimensions
    const compStyle = window.getComputedStyle(dd),
        boundingRect = dd.getBoundingClientRect();

    const {width: w, height: h} = compStyle;
    const {left: x, top: y} = boundingRect;

    // Parent's dimensions
    const {left: xP, top: yP} = parentBounds(dd.parentElement);

    // Calculations
    const xR = `${x - xP}px`
    const yR = `${y - yP}px`

    const horizontalCorrection = Math.max(0, parseFloat(x) + parseFloat(w) + 31 - window.innerWidth);

    fa.background.style.width    = `${w}`;
    fa.background.style.height   = `${h}`;
    fa.background.style.left     = `${parseInt(xR) - horizontalCorrection}px`;
    fa.background.style.top      = yR;

    dd.style.left = `${parseFloat(dd.style.left || 0) - horizontalCorrection}px`;

    setTimeout(() => toggleMiddleTrans(fa.background, true));
}

function faSwitchUnderline(li) {
    // Instance's dimensions
    const compStyle = window.getComputedStyle(li),
        boundingRect = li.getBoundingClientRect();

    const {width: w, paddingRight} = compStyle;
    const {left: x, bottom: y} = boundingRect;

    // Parent's dimensions
    const {left: xP, top: yP} = parentBounds(li);
    
    // Calculations
    const xR = `${x - xP}px`
    const yR = `${y - yP + 8}px`

    fa.underline.style.width    = `${parseInt(w) - parseInt(paddingRight)}px`;
    fa.underline.style.height   = `6px`;
    fa.underline.style.left     = xR;
    fa.underline.style.top      = yR;

    setTimeout(() => toggleMiddleTrans(fa.underline, true));
}

function faRemove(obj) {
    obj.style.width = '0px';
}

function toggleMiddleTrans(obj, bool = false) {
    const props = !bool ? 'width' : 'width, height, left';
    obj.style.transitionProperty = props;
}

export default followAlong;