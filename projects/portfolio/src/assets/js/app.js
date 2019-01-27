
const scrollEvents = (e) => {

    // page offset events
    let offsetY = null;
    window.addEventListener('scroll', () => {
         offsetY = window.pageYOffset;
        //  console.log(offsetY);
        const navigation = document.querySelector('.navigation');
        if(offsetY > 620){
            navigation.setAttribute('style', 'position: fixed; background: rgba(125,130,142, .9)');
        } else if (offsetY < 620) {
            navigation.style.position = 'inherit';
        }
    });

    const projectCards = document.querySelectorAll('.project-card');

    projectCards[0].addEventListener("mousemove", (e) => {
        projectCards[0].style.backgroundPositionX = -e.offsetX/7 + "px";
        projectCards[0].style.backgroundPositionY = -e.offsetY /15+ "px";
        console.log(e.offsetY);
        projectCards[0].setAttribute('style', `transform: rotate3d(1, 1, 1, ${parseInt(-e.offsetY/12)}deg); transform-style: preserve-3d;`);
      });
}







document.addEventListener('DOMContentLoaded', scrollEvents);