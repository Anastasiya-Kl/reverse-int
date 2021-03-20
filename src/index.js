module.exports = function reverse (n) {
    let arr = n.toString().split("");
    let reverseArr = arr.reverse();
    return parseInt(reverseArr.join(""));    
}
