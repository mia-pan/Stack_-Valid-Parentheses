var s = "(, {, ["
function isSameType(s){
    if s == '(' ||  s == ')'{
       return 1 
    }else if s == '{' || s ==  '}'{
       return 2
    }else if s == '[' || s == ']'{
       return 3 
    }
}


var isValid = function(s) {
    for(i= 0; i<s.length; i++){
    var stackArray = []
    if(stackArray.length === 0){
        stackArray.push(S[0])
    }else
        if s[i] == '(' || s[i] == '{'|| s[i] == '[' {
            stackArray.push(s[i])
        }else {
            if (isSameType(s[i]) === isSameType(stackArray[stackArray.length-1]) ){
                stackArray.pop()
            }else{
                return false 
            }
        }
    }
    if (stackArray.length === 0) {
    return true
    }


    
};

// function isSameType(s){
// if s == '(' ||  s == ')'{
//    return 1 
// }else if s == '{' || s ==  '}'{
//    return 2
// }else if s == '[' || s == ']'{
//    return 3 
// }
// }