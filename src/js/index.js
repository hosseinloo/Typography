"use strict"
let hero, text, walk;

hero = document.getElementById('hero');
text = hero.querySelector('h1');
walk = 500; // 500px

hero.addEventListener('mousemove', (event) => {
    let {offsetHeight: height , offsetWidth: width} = hero;
    let {offsetX: x , offsetY: y} = event;
    x += event.target.offsetLeft;
    y += event.target.offsetTop;

    let xWalk = Math.round((x / width * walk) - (walk / 2));
    let yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0px rgba(0, 128, 128, 0.7),
        ${xWalk * -1}px ${yWalk}px 0px rgba(255, 17, 17, 0.7),
        ${yWalk}px ${xWalk * -1}px 0px rgba(190, 255, 61, 0.7),
        ${yWalk * -1}px ${xWalk}px 0px rgba(49, 49, 255, 0.7)
    `;

})

