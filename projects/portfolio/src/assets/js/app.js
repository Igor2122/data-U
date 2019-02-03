const scrollEvents = (e) => {

    const homeDiv = document.querySelector('.home');

    console.log(homeDiv.scrollHeight);
    console.log(homeDiv.offsetHeight);
    const homeDivClinetHeight = homeDiv.clientHeight;
    // page offset events


    let offsetY = null;
    window.addEventListener('scroll', () => {
        offsetY = window.pageYOffset;
        //  console.log(offsetY);
        const navigation = document.querySelector('.navigation');
        if (offsetY > homeDivClinetHeight) {
            navigation.setAttribute('style', 'position: fixed; background: rgba(125,130,142, .9)');
        } else if (offsetY < homeDivClinetHeight) {
            navigation.style.position = 'inherit';
        }
    });

    const projectCards = document.querySelectorAll('.project-card');

    projectCards[0].addEventListener("mousemove", (e) => {
        projectCards[0].style.backgroundPositionX = -e.offsetX / 15 + "px";
        projectCards[0].style.backgroundPositionY = -e.offsetY / 15 + "px";
        
    });
}

VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 25,
    speed: 400
});












document.addEventListener('DOMContentLoaded', scrollEvents);