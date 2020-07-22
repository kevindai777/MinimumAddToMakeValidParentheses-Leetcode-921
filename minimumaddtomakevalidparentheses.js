//Objective is to find out the minimum number of parentheses to add to make a string valid

let s = '())'


//O(n) solution that uses a stack to keep track of parentheses going in and out

let stack = []
let count = 0

for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
        stack.push(i)
    } else {
        if (stack.length == 0) {
            count++
        } else {
            stack.pop()
        }
    }
}

while (stack.length > 0) {
    stack.pop()
    count++
}

return count