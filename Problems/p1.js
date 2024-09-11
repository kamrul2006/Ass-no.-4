function calculateTax(income, expenses) {

    if (expenses < 0 || income < 0 || expenses > income) {
        return 'Invalid Input'
    }

    const ay = income - expenses
    const tax = ay * 20 / 100

    return tax
}

const num = 5000
const num1 = -2000

console.log(calculateTax(10000, 3000))

