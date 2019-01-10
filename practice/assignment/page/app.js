function palindrome(str) {
    


    let i = str.split('');
    let joinedI = i.join('')
    let reversed = i.reverse();
    let joinedRevI = reversed.join('');
    console.log(joinedRevI);
    console.log(joinedI);
    if( joinedI == joinedRevI){
        return true 
    }
    return false;
  }
  
  
  
  console.log( palindrome("never odd or even"));
  console.log(palindrome("eye"));