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

isValid = s => {
    let stackArray = []
    for(i = 0; i < s.length; i ++){
        if (s[i] == "(" || s[i] == "{" || s[i] == "["){
            stackArray.push(s[i])
        }else if ((char == " (" && s[i] == ")") || 
        (char == "{" && s[i] == "}") ||
        (char == "[" && s[i] == "]")){
            stackArray.pop()
        }else return false 
    }
    return stackArray.length ? false : true
}


////

isValid = s => {
    let map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    let stackArray = [];
    for(let i = 0; i < s.length, i ++){
        if (s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stackArray.push(s[i]);
        }else if (stackArray[stackArray.length - 1] === map[s[i]]) {
            stackArray.pop()
        }else return false
    }
    return stackArray.length? false : true 
}