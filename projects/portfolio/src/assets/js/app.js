const scrollEvents = (e) => {

    const homeDiv = document.querySelector('.home');


    const homeDivClinetHeight = homeDiv.clientHeight;

    let offsetY = null;
    window.addEventListener('scroll', () => {
        offsetY = window.pageYOffset;
        //  console.log(offsetY);
        const navigation = document.querySelector('.navigation');
        if (offsetY > (homeDivClinetHeight - 50)) {
            navigation.setAttribute('style', 'position: fixed; background: rgba(125,130,142, .9)');
        } else if (offsetY < homeDivClinetHeight) {
            navigation.style.position = 'inherit';
        }
    });


}

const projectCards = document.querySelectorAll('.project-card');
projectCards[0].addEventListener("mousemove", (e) => {
    projectCards[0].style.backgroundPositionY = -e.offsetY / 10 + "px";
    projectCards[0].style.backgroundPositionX = -e.offsetX / 20 + "px";

});


{
    /* <div class="project-card" style="transform: perspective(1000px) rotateX(-4.42deg) rotateY(-1.52deg) scale3d(1, 1, 1); will-change: transform;"></div> */ }















document.addEventListener('DOMContentLoaded', scrollEvents);