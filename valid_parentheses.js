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



///////////solution 4////////
let s = "([])(("
let stack = []
let open = "([{"

var isValid = function(s) {
    if (s.length % 2 === 1) return false
    for(char of s){
        if (open.includes(char)) {
            stack.push(char) 
            console.log('push', char)
        } else {
            if (!stack) return false
            // if (stack.length === 0) return false 
            let toMatch = stack.pop()
            console.log('comparing', toMatch, char)
            if (toMatch == "(" && char !== ")") return false 
            if (toMatch == "[" && char !== "]") return false 
            if (toMatch == "{" && char !== "}") return false 
        }
    }
        console.log('remaining stack', stack)
        return !stack.length
};
/////////solution 5 ///////
var isValid = function(s) {
    let h = []
    for (c of s) {
        if ('({['.includes(c)) {
            h.push(c)
        } else if (h.length < 1 || Math.abs(c.charCodeAt(0) - h.pop().charCodeAt(0)) > 2) {
            return false
        }
    }
    return !h.length

};

/////////solution 6 ////////
let s = "([])(("
let stack = []
let open = "([{"

var isValid = function(s) {
    if (s.length % 2 === 1) return false
    for(char of s){
        if (open.includes(char)) {
            stack.push(char) 
            console.log('push', char)
        } else {
            if (!stack) return false
            // if (stack.length === 0) return false 
            let toMatch = stack.pop()
            console.log('comparing', toMatch, char)
            if (toMatch == "(" && char !== ")") return false 
            if (toMatch == "[" && char !== "]") return false 
            if (toMatch == "{" && char !== "}") return false 
        }
    }
        console.log('remaining stack', stack)
        return !stack.length
};