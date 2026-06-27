/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let reversed = "";
    for(i = str.length -1; i>=0; i-- ){
        reversed += str[i]
    }
    if( str === reversed){
        return true;
    }else {
        return false;
    }
    
};
