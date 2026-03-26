const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

// cursor move

document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';

    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';

});


// Hover effect 

document.querySelectorAll('h1, a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.classList.add('active');
        dot.classList.add('hide');
    });

    el.addEventListener('mouseleave', () => {
        ring.classList.remove('active');
        dot.classList.remove('hide');
    });
});