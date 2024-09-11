function calculateFinalScore(obj) {
    let ffarmar = 0

    if (typeof obj !== 'object') {
        return 'Invalid Input'
    }

    if (obj.isFFamily === true) {
        const farmar = 20;
        ffarmar = farmar
    }

    if (obj.isFFamily !== true) {
        const farmar = 0;
        ffarmar = farmar
    }

    const mark = ffarmar + obj.testScore + obj.schoolGrade

    if (mark >= 80) {
        return true
    }
    else if (mark < 80){
        return false
    }

}

const ff ={ name: "Rajib", testScore: 45, schoolGrade: 25,
    isFFamily : true }
    
    
    

console.log(calculateFinalScore(ff))