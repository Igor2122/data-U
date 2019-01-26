
const scrollEvents = (e) => {

    let offsetY = null;
    window.addEventListener('scroll', () => {
        
         offsetY = window.pageYOffset;
        const navigation = document.querySelector('.navigation');
        if(offsetY > 620){
            navigation.setAttribute('style', 'position: fixed; background: rgba(125,130,142, .9)');
        } else if (offsetY < 620) {
            navigation.style.position = 'inherit';
        }
    })
}







document.addEventListener('DOMContentLoaded', scrollEvents);