
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input'
    }
    else if (name.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) {
        return true
    }
    else {
        return false
    }

}


const Name = ["Raj"]
const Name1 = ' Kamrul Islam Apurba012769'
const Name2 = [' Kamrul Islam Apurba012769']

console.log(checkDigitsInName(Name))