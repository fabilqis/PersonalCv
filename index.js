let currentDroppable = null;

avatar.onmousedown = event => {

    let shiftX = event.clientX - avatar.getBoundingClientRect().left;
    let shiftY = event.clientY - avatar.getBoundingClientRect().top;

    avatar.style.position = 'absolute';
    avatar.style.zIndex = 1000;
    document.body.append(avatar);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        avatar.style.left = pageX - shiftX + 'px';
        avatar.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        avatar.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        avatar.hidden = false;

        if (!elemBelow) return;
    }

    document.addEventListener('mousemove', onMouseMove);

    avatar.onmouseup = () => {
        document.removeEventListener('mousemove', onMouseMove);
        avatar.onmouseup = null;
    };

};

avatar.ondragstart = () => {
    return false;
};