class ProgressBar {



    incrementProgress(val) {
        let elemCurrentWidth = val.offsetWidth
        if(elemCurrentWidth < 432){
            val.style.width = elemCurrentWidth + 30 + 'px';
        }
        console.log(elemCurrentWidth);
    }

    decrementProgress(val) {
        let elemCurrentWidth = val.offsetWidth;
        val.style.width = elemCurrentWidth - 30 + 'px';
        console.log(elemCurrentWidth);
        if(elemCurrentWidth < 0){
            val.style.width = '0';
        }
    }
    


}